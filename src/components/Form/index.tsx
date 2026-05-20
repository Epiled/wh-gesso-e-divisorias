import { useState } from "react";
import { type SyntheticEvent } from "react";
import { Button } from "../Button";
import { Field } from "../Field";
import { FormButtons, FormStyled } from "./styles";
import { FieldSelect } from "../FieldSelect";

interface FormProps {
  className?: string;
}
interface FormData {
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  mensagem: string;
}

export const Form = (props: FormProps) => {
  const { className } = props;

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: "",
  });

  const [isSending, setIsSending] = useState<boolean>(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSendEmail = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const URL_HOSTINGER = "https://whgesso.com/enviar-email.php";

      const response = await fetch(URL_HOSTINGER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("E-mail enviado com sucesso!");
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          servico: "",
          mensagem: "",
        });
      } else {
        alert(data.erro ?? "Ocorreu um erro ao enviar.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Não foi possível conectar ao servidor.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <FormStyled
      className={className}
      as="form"
      onSubmit={(e) => void handleSendEmail(e)}
    >
      <Field
        text="Nome:"
        placeholder="João Silva..."
        value={formData.nome}
        onChange={(e) => {
          handleInputChange("nome", e.target.value);
        }}
      />

      <Field
        text="E-mail:"
        placeholder="exemplo@gmail.com"
        value={formData.email}
        onChange={(e) => {
          handleInputChange("email", e.target.value);
        }}
      />

      <Field
        text="Telefone (opcional):"
        placeholder="(11) 9 8756-4321"
        value={formData.telefone}
        onChange={(e) => {
          handleInputChange("telefone", e.target.value);
        }}
      />

      <FieldSelect
        text="Serviço:"
        placeholder="Selecione um serviço"
        value={formData.servico}
        onChange={(e) => {
          handleInputChange("servico", e.target.value);
        }}
      />

      <Field
        as="textarea"
        text="Mensagem:"
        placeholder="Mensagem..."
        value={formData.mensagem}
        onChange={(e) => {
          handleInputChange("mensagem", e.target.value);
        }}
      />

      <FormButtons>
        <Button
          type="submit"
          appearance="inverse"
          text={isSending ? "Enviando..." : "Solicitar Orçamento"}
          disabled={isSending}
        />
      </FormButtons>
    </FormStyled>
  );
};
