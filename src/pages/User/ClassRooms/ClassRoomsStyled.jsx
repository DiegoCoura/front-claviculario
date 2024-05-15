import styled from "styled-components";

export const ClassRoomsContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    cursor: pointer;
    background-color: #e7e7e7;
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 8px;
    margin-bottom: 8px;
    font-size: 1rem;
    transition: 0.2s ease-out;
  }

  button:hover {
    transform: scale(1.05);
  }
  button > * {
    pointer-events: none;
  }
`;

export const Status = styled.div`
  background-color: green;
  border-radius: 8px;
  color: #fff;
  padding: 4px 10px;
`;

export const SingleRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;

  h1 {
    margin: 1rem auto 2rem;
  }

  li {
    display: flex;
    background-color: #e7e7e7;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-radius: 8px;
    margin-bottom: 8px;
    width: 100%;
  }

  button {
    background-color: tomato;
    border: none;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    transition: 0.2s ease-out;
  }

  button:hover {
    transform: scale(1.05);
  }
`;
