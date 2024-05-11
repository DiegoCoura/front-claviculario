import { ButtonSpace } from "./ButtonStyled";

export default function Button({
  type,
  text,
  handleClick,
}) {
  return (
    <ButtonSpace type={type} onClick={handleClick}>
      {text}
    </ButtonSpace>
  );
}
