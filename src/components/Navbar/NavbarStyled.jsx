import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 12px 20px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    width: 2rem;
    transition: 0.5s ease-out;
  }

  img:hover {
    transform: rotate(180deg);
  }
`;
