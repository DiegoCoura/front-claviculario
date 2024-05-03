import { InputSpace } from "./InputStyled";

export default function Input({ type, placeholder, name, register }) {
  return (
    <InputSpace type={type} placeholder={placeholder} {...register(name)}/>
  );
}
