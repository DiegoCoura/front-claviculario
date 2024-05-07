import { Outlet } from "react-router-dom";
import NavBar from "../../../components/Navbar/Navbar";
import {
  DisplaySection,
  HomeUserContainer,
  MainSection,
  NavLink,
  SideBar,
} from "./HomeUserStyled";

export default function HomeUser() {
  return (
    <>
      <HomeUserContainer>
        <NavBar />
        <MainSection>
          <SideBar>
            <NavLink to={`/user/salas`}>Minhas Salas</NavLink>

            <NavLink to={`/user/solicitacoes`}>Solicitações</NavLink>
          </SideBar>
          <DisplaySection>
            <Outlet />
          </DisplaySection>
        </MainSection>
      </HomeUserContainer>
    </>
  );
}
