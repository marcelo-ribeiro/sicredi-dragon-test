import { memo } from "react";
import { Field, FieldLabel, FieldInput } from "./style";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: IProps) => {
  return (
    <Field className="form-field" htmlFor={props.id}>
      <FieldLabel className="form-field__label">{label}</FieldLabel>
      <FieldInput {...props} />
    </Field>
  );
};

export default memo(Input);
