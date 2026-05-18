import { Button } from "../Button";
import { Field } from "../Field";
import { FormButtons, FormStyled } from "./styles";

interface FormProps {
  className?: string;
}

export const Form = (props: FormProps) => {
  const { className } = props;

  return (
    <FormStyled className={className}>
      <Field text="Name:" placeholder="João Silva..." />
      <Field text="E-mail:" placeholder="exemplo@gmail.com" />

      <Field text="Telefone (opcional):" placeholder="(11) 9 8756-4321" />
      <Field text="Serviço:" placeholder="Selecione um serviço" />
      <Field text="Menssagem:" placeholder="Menssagem..." />

      <FormButtons>
        <Button appearance="inverse" text="Solicitar Orçamento" />
      </FormButtons>
    </FormStyled>
  );
};
