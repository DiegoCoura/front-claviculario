import { Outlet } from "react-router-dom";
import NavBar from "../../../components/Navbar/Navbar";
import {
  DisplaySection,
  HomeUserContainer,
  MainSection,
  NavLink,
  SideBar,
} from "./HomeUserStyled";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

export default function HomeUser() {
  const { user } = useContext(UserContext);
  return (
    <>
      <HomeUserContainer>
        <NavBar />
        <MainSection>
          <SideBar>
            {user.role === "admin" && (
              <>
                <NavLink to={`/user/salas`}>Salas</NavLink>
                <NavLink to={`/user/salas/livres`}>Livres</NavLink>
                <NavLink to={`/user/salas/ocupadas`}>Ocupadas</NavLink>
              </>
            )}
            {(user.role === "professor" || user.role === "student") && (
              <>
                <NavLink to={`/user/salas`}>Minhas Salas</NavLink>

                <NavLink to={`/user/solicitacoes`}>Solicitações</NavLink>
              </>
            )}
          </SideBar>
          <DisplaySection>
            <Outlet />
          </DisplaySection>
        </MainSection>
      </HomeUserContainer>
    </>
  );
}
