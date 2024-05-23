import { useContext, useState } from "react";
import {
  addUserToRoom,
  deleteRequest,
  getRoom,
} from "../../../utils/helperFunctions";
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
  Status,
} from "./ClassRequestsStyled";
import { UserContext } from "../../../Context/UserContext";

export default function ClassRequests() {
  const { user } = useContext(UserContext);
  const [currentRoom, setCurrentRoom] = useState("");
  const [currentRequests, setCurrentRequests] = useState(roomRequests);

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

  const onAccept = (e) => {
    const selectedRoom = e.target.id.split("--")[1];
    const acceptedReq = roomRequests.find((req) => req.id === selectedRoom);
    addUserToRoom(roomsDB, acceptedReq);

    const filteredReqs = currentRequests.filter(
      (req) => req.id != selectedRoom
    );
    setCurrentRequests(filteredReqs);
    deleteRequest(roomRequests, selectedRoom);
  };

  const onReject = (e) => {
    const rejectedReq = e.target.id.split("--")[1];
    const filteredReqs = currentRequests.filter((req) => req.id != rejectedReq);
    setCurrentRequests(filteredReqs);
    deleteRequest(roomRequests, rejectedReq);
  };

  const onRequest = () => {
    let currRequest = {
      id: `${currentRoom.room}_${user.email}`,
      room: currentRoom.room,
      name: user.name,
      role: user.role,
      phone: user.phone,
      email: user.email,
      status: "pendente",
    };
    let dupleRequest = roomRequests.some(
      (request) => request.room === currRequest.room
    );
    if (dupleRequest === true) return;
    setCurrentRequests((prevReqs) => [...prevReqs, currRequest]);
    roomRequests.push(currRequest);
  };

  let requestsList;
  if (user.role === "student") {
    requestsList = roomRequests.map((req) => {
      if (req.email === user.email) {
        return (
          <li key={req.id}>
            <div>Sala: {req.room}</div>
            <Status>{req.status}</Status>
          </li>
        );
      }
    });
  } else if (user.role === "professor") {
    requestsList = roomRequests.map((req) => {
      return (
        <li key={req.id}>
          <div>
            Sala: {req.room} - {req.name} - cel: {req.phone}
          </div>
          <div>
            <Button
              id={`accept--${req.id}`}
              text={"Aprovar"}
              type={"button"}
              handleClick={(e) => onAccept(e)}
            ></Button>
            <Button
              id={`reject--${req.id}`}
              className={"red"}
              text={"Recusar"}
              type={"button"}
              handleClick={(e) => onReject(e)}
            ></Button>
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
        {currentRoom && user.role === "student" && (
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
