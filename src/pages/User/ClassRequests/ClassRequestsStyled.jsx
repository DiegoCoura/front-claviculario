import styled from "styled-components";

export const ClassRequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const RequestContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ListContainer = styled.ul`
  width: 100%;

  li {
    display: flex;
    background-color: #e7e7e7;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

export const Status = styled.div`
  background-color: tomato;
  border-radius: 8px;
  color: #fff;
  padding: 4px 10px;
`;
