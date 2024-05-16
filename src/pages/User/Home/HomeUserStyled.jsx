import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const HomeUserContainer = styled.div`
  height: 90%;
`;

export const MainSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr;
  height: 100%;
`;

export const DisplaySection = styled.section`
  border: 2px solid black;
  border-radius: 18px;
  padding: 1rem;
  overflow: hidden;
`;

export const SideBar = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 6px;
`;

export const NavLink = styled(BaseNavLink)`
  text-decoration: none;
  color: black;
  border: 1px solid black;
  border-radius: 18px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  transition: 0.2s ease-out;

  &:hover {    
    font-size: 1.1rem;
  }

  &.active {
    background-color: #e7e7e7;
  }
`;
