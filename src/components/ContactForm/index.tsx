import { useState, type ChangeEvent } from "react";

import { ChockIcon } from "../Icons/ChockIcon";
import { Input } from "../Input";

import { SectionContentTexts } from "../SectionContent/styles";

import { Text } from "../Text";
import { Title } from "../Title";

import {
  ContactFormButton,
  ContactFormContent,
  ContactFormDivide,
  ContactFormGrid,
  ContactFormItem,
  ContactFormList,
  ContactFormStyled,
  ContactFormWrapper,
  ContactTextArea,
} from "./styles";
import { Select } from "../InputSelect";
import { servicesRoutes } from "../../constants/servicesRoutes";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  mensagem: string;
}

const INITIAL_FORM: FormData = {
  nome: "",
  email: "",
  telefone: "",
  servico: "",
  mensagem: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);

  const [isSending, setIsSending] = useState(false);

  const handleChange =
    (field: keyof FormData) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSendEmail = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    try {
      const response = await fetch("https://whgesso.com/enviar-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro ?? "Erro ao enviar formulário");
      }

      alert("E-mail enviado com sucesso!");

      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error(error);

      alert("Não foi possível enviar sua solicitação.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <ContactFormStyled>
      <ContactFormWrapper>
        <ContactFormContent>
          <ContactFormDivide $decoration="left">
            <Title title="Fale Conosco" decoration="left" />

            <SectionContentTexts>
              <Text text="Preencha o formulário ao lado e solicite seu orçamento sem compromisso." />
            </SectionContentTexts>
          </ContactFormDivide>

          <ContactFormList>
            <ContactFormItem>
              <ChockIcon /> Resposta rápida
            </ContactFormItem>

            <ContactFormItem>
              <ChockIcon /> Orçamento personalizado
            </ContactFormItem>

            <ContactFormItem>
              <ChockIcon /> Soluções completas para seu projeto
            </ContactFormItem>
          </ContactFormList>
        </ContactFormContent>

        <ContactFormGrid as="form" onSubmit={() => void handleSendEmail}>
          <Input
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange("nome")}
          />

          <Input
            type="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange("email")}
          />

          <Input
            placeholder="Seu telefone / WhatsApp"
            value={formData.telefone}
            onChange={handleChange("telefone")}
          />

          <Select
            value={formData.servico}
            onChange={handleChange("servico")}
            required
          >
            <option value="" disabled>
              Selecione o serviço
            </option>

            {servicesRoutes.map((service) => {
              const { id, title } = service;

              return (
                <option key={id} value={title}>
                  {title}
                </option>
              );
            })}
          </Select>

          <ContactTextArea
            placeholder="Descreva seu projeto ou necessidade"
            value={formData.mensagem}
            onChange={handleChange("mensagem")}
          />

          <ContactFormButton
            type="submit"
            appearance="default"
            text={isSending ? "Enviando..." : "Enviar Solicitação"}
            disabled={isSending}
            onClick={() => {
              return "";
            }}
          />
        </ContactFormGrid>
      </ContactFormWrapper>
    </ContactFormStyled>
  );
};
