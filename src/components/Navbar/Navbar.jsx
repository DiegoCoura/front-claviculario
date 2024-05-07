import { useContext } from "react";
import { NavContainer } from "./NavbarStyled";
import { UserContext } from "../../Context/UserContext";

export default function NavBar() {
  const { user } = useContext(UserContext)
  return (
    <>
      <NavContainer>
        <h3>{user.name}</h3>
        <button>
          <img src="/gear.svg"></img>
        </button>
      </NavContainer>
    </>
  );
}
