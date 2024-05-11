import { useContext, useState } from "react";
import { getRoom } from "../../../utils/getFunctions";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";
import { roomsDB } from "../../../mock-data/rooms";
import { roomRequests } from "../../../mock-data/roomsRequests";
import Button from "../../../components/Button/Button";
import {
  ClassRequestContainer,
  ListContainer,
  RequestContainer,
  ResultContainer,
} from "./ClassRequestsStyled";
import { UserContext } from "../../../Context/UserContext";

export default function ClassRequests() {
  const { user } = useContext(UserContext);
  const [currentRoom, setCurrentRoom] = useState("");
  const [currentRequest, setCurrentRequest] = useState({});

  const {
    register: registerSearch,
    handleSubmit: handleSearch,
    reset,
  } = useForm();

  const onSearch = (data) => {
    if (!data.room) return;
    const { room } = data;
    const currRoom = getRoom(roomsDB, room.toUpperCase());
    setCurrentRoom(currRoom);
    reset();
  };

  const onRequest = () => {
    let currRequest = {
      room: currentRoom.room,
      aluno: user.name,
      phone: user.phone,
      status: "pendente",
    };
    let dupleRequest = roomRequests.some(
      (request) => request.room === currRequest.room
    );
    if (dupleRequest === true) return;
    setCurrentRequest(currRequest);
    roomRequests.push(currRequest);
  };

  let requestsList;
  if (user.role === "student") {
    requestsList = roomRequests.map((req) => {
      return (
        <div key={req.room}>
          Sala: {req.room} - Status: {req.status}
        </div>
      );
    });
  } else if (user.role === "professor") {
    requestsList = roomRequests.map((req) => {
      return (
        <li key={`${req.room}-${req.phone}`}>
          <div>
            Sala: {req.room} - {req.aluno} - cel: {req.phone} - Status:{" "}
            {req.status}
          </div>
          <div>
            <Button text={"Aprovar"} type={"button"}></Button>
            <Button className={"red"} text={"Recusar"} type={"button"}></Button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <ClassRequestContainer>
        <RequestContainer>
          <form action="" onSubmit={handleSearch(onSearch)}>
            <Input
              type="text"
              placeholder="SALA"
              name="room"
              register={registerSearch}
            />
            <Button type={"submit"} text={"Buscar Sala"} />
          </form>
        </RequestContainer>
        {currentRoom && (
          <ResultContainer>
            <div>{currentRoom.room}</div>
            <Button
              type={"button"}
              text={"solicitar Acesso"}
              handleClick={() => onRequest()}
            />
          </ResultContainer>
        )}
        <ListContainer>{requestsList}</ListContainer>
      </ClassRequestContainer>
    </>
  );
}
