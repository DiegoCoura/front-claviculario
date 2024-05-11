import { ButtonSpace } from "./ButtonStyled";

export default function Button({
  type,
  text,
  handleClick,
  className
}) {
  return (
    <ButtonSpace className={className} type={type} onClick={handleClick}>
      {text}
    </ButtonSpace>
  );
}
