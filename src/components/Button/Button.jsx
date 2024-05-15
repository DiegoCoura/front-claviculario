import { ButtonSpace } from "./ButtonStyled";

export default function Button({
  id,
  type,
  text,
  handleClick,
  className
}) {
  return (
    <ButtonSpace id={id} className={className} type={type} onClick={handleClick}>
      {text}
    </ButtonSpace>
  );
}
