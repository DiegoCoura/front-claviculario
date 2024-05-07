import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../../../components/Navbar/Navbar";
import {
  DisplaySection,
  HomeUserContainer,
  MainSection,
} from "./HomeUserStyled";

export default function HomeUser() {
  return (
    <>
      <HomeUserContainer>
        <NavBar />
        <MainSection>
          <section>
            <ul>
              <li>
                <NavLink to={`/salas`}>Minhas Salas</NavLink>
              </li>
              <li>
                <NavLink to={`/solicitacoes`}>Solicitações</NavLink>
              </li>
            </ul>
          </section>
          <DisplaySection>
            <Outlet />
          </DisplaySection>
        </MainSection>
      </HomeUserContainer>
    </>
  );
}
