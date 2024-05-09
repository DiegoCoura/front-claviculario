import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  } 
  to{
    transform: translateY(0px);
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 12px 20px;
  position: relative;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    width: 2rem;
  }
`;

export const DropDownMenu = styled.div`
  position: absolute;
  top: 60px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding: 20px;
  border-radius: 18px;
  background-color: #e7e7e7;
  animation: ${slideIn} 0.5s ease-out;

  a {
    color: black;
    text-decoration: none;
  }
`;
