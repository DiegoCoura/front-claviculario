import { NavLink } from "react-router-dom";
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
                <NavLink>Minhas Salas</NavLink>
              </li>
              <li>
                <NavLink>Solicitações</NavLink>
              </li>
            </ul>
          </section>
          <DisplaySection>Hola</DisplaySection>
        </MainSection>
      </HomeUserContainer>
    </>
  );
}
