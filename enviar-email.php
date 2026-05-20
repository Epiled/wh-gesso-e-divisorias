<?php

// Permite qualquer origem (incluindo seu localhost)
header("Access-Control-Allow-Origin: *");
// Permite os métodos de envio necessários e a pré-checagem (OPTIONS)
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// Permite que o React envie o cabeçalho "Content-Type: application/json"
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Se for uma requisição de pré-checagem (OPTIONS), o PHP responde com sucesso e para aqui
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $dados = json_decode(file_get_contents("php://input"), true);

    $nome = strip_tags(trim($dados["nome"]));
    $email = filter_var(trim($dados["email"]), FILTER_SANITIZE_EMAIL);
    $telefone = strip_tags(trim($dados["telefone"]));
    $servico = strip_tags(trim($dados["servico"]));
    $mensagem = strip_tags(trim($dados["mensagem"]));

    // Validação dos campos obrigatórios
    if (empty($nome) || empty($email) || empty($servico) || empty($mensagem)) {
        http_response_code(400);
        echo json_encode(["erro" => "Por favor, preencha todos os campos obrigatórios."]);
        exit;
    }

    $para = "whgessoedivisorias@gmail.com"; // E-mail da Beatriz
    $assunto = "Novo Orçamento [" . $servico . "] - " . $nome;

    // Corpo do e-mail com os novos campos formatados
    $corpo = "
        <h2>Solicitação de Orçamento pelo Site</h2>
        <p><strong>Nome:</strong> {$nome}</p>
        <p><strong>E-mail:</strong> {$email}</p>
        <p><strong>Telefone:</strong> " . (empty($telefone) ? "Não informado" : $telefone) . "</p>
        <p><strong>Serviço Solicitado:</strong> {$servico}</p>
        <p><strong>Mensagem:</strong><br>{$mensagem}</p>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: site@whgessos.com.br" . "\r\n"; 
    $headers .= "Reply-To: {$email}" . "\r\n";

    if (mail($para, $assunto, $corpo, $headers)) {
        http_response_code(200);
        echo json_encode(["sucesso" => "E-mail enviado com sucesso!"]);
    } else {
        http_response_code(500);
        echo json_encode(["erro" => "Erro interno do servidor ao enviar o e-mail."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["erro" => "Método não permitido."]);
}
?>