import { useContext, useState } from "react";
import { DropDownMenu, NavContainer } from "./NavbarStyled";
import { UserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { user } = useContext(UserContext);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <NavContainer>
        <h3>{user.name}</h3>
        <button onClick={() => setShowDropDown(!showDropDown)}>
          <img src="/gear.svg"></img>
        </button>
        {showDropDown && (
          <DropDownMenu>
            <Link to="/user/minhaconta">Minha conta</Link>
            <Link to="/">Sair</Link>
          </DropDownMenu>
        )}
      </NavContainer>
    </>
  );
}
