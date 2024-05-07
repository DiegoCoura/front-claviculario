import { NavContainer } from "./NavbarStyled";

export default function NavBar() {
  return (
    <>
      <NavContainer>
        <h3>Nome do usuário</h3>
        <button>
          <img src="/gear.svg"></img>
        </button>
      </NavContainer>
    </>
  );
}
