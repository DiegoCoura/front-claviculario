import { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import {
  getRoom,
  getUserByEmail,
  deliverKey,
  returnKey,
} from "../../../utils/helperFunctions";
import { roomsDB } from "../../../mock-data/rooms";
import {
  BackButton,
  ClassRoomsContainer,
  UsersListContainer,
  SingleRoomContainer,
  Status,
  RoomsList,
  RoomButton,
  UserContainer,
  KeyExchangeContainer,
  RoomUserContainer,
} from "./ClassRoomsStyled";
import { RequestContainer } from "../ClassRequests/ClassRequestsStyled";
import Button from "../../../components/Button/Button";
import { Users } from "../../../mock-data/Users";
import SearchForm from "../../../components/Form/SearchForm";

export default function ClassRooms() {
  const { user } = useContext(UserContext);
  const [currRoom, setCurrRoom] = useState("");
  const [currentUser, setCurrentUser] = useState();

  const onSearch = (data) => {
    if (!data.email && !data.room) return;
    if (data.email) {
      const { email } = data;
      const searchUser = getUserByEmail(Users, email.toLowerCase());
      setCurrentUser(searchUser);
    }

    if (data.room) {
      const { room } = data;
      const searchRoom = getRoom(roomsDB, room.toUpperCase());
      setCurrRoom(searchRoom);
    }
  };

  const selectRoom = (e) => {
    const searchRoom = getRoom(roomsDB, e.target.id);
    setCurrRoom(searchRoom);
  };

  const handleDeliverKey = () => {
    if (currRoom.status != "livre") return;

    deliverKey(user, currentUser, currRoom.room);
    const newRoomState = roomsDB.find((room) => room.room === currRoom.room);
    setCurrRoom({ ...currRoom, status: newRoomState.status });
    setCurrentUser();
  };

  const handleReturnKey = () => {
    returnKey(currRoom.room);
    const newRoomState = roomsDB.find((room) => room.room === currRoom.room);

    setCurrRoom({ ...currRoom, status: newRoomState.status });
    setCurrentUser();
  };

  let userRoomsArray;
  if (user.role === "admin") {
    userRoomsArray = roomsDB.map(({ room }) => room);
  } else {
    userRoomsArray = user.classrooms;
  }

  const roomsList = userRoomsArray.map((room) => {
    let currRoom = getRoom(roomsDB, room);
    return (
      <RoomButton
        key={room}
        id={room}
        onClick={(e) =>
          user.role === "professor" || user.role === "admin"
            ? selectRoom(e)
            : null
        }
      >
        <div>{currRoom.room}</div>
        <Status className={currRoom.status != "livre" ? "red" : ""}>
          {currRoom.status != "livre" ? "ocupada" : "livre"}
        </Status>
      </RoomButton>
    );
  });
  let currRoomUsersList;
  if (currRoom && user.role === "professor") {
    currRoomUsersList = currRoom.users.map((person) => {
      return (
        <li key={person.email}>
          <div>
            {`${person.name} - ${person.role} - ${person.phone} - ${person.email}`}
          </div>
          <div>
            <button>Remover</button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      {(currRoom && (
        <SingleRoomContainer>
          <h1>
            SALA: {currRoom.room} /{" "}
            {currRoom.status != "livre" ? "ocupada" : "livre"}
          </h1>
          {(user.role === "admin" && currRoom.status === "livre" && (
            <RequestContainer>
              <SearchForm
                onSearch={onSearch}
                placeholder={"email"}
                inputName={"email"}
              />
            </RequestContainer>
          )) ||
            (user.role === "admin" && currRoom.status != "livre" && (
              <KeyExchangeContainer>
                <RoomUserContainer>
                  <div>
                    Usuário: {currRoom.status.deliveredTo.name} Email:{" "}
                    {currRoom.status.deliveredTo.email} Cel:{" "}
                    {currRoom.status.deliveredTo.phone}
                  </div>
                  <div>
                    <Button
                      text={"Receber Chave"}
                      handleClick={() => handleReturnKey()}
                    ></Button>
                  </div>
                </RoomUserContainer>

                <div>
                  <h3>Entregue por:</h3>
                  {currRoom.status.deliveredBy.name} Email:{" "}
                  {currRoom.status.deliveredBy.email} Cel:{" "}
                  {currRoom.status.deliveredBy.phone}
                </div>
              </KeyExchangeContainer>
            ))}
          {currentUser && currRoom.status === "livre" && (
            <UserContainer>
              <div>
                Nome: {currentUser.name} Email: {currentUser.email} Cel:{" "}
                {currentUser.phone}
              </div>
              <div>
                <Button
                  text={"Entregar Chave"}
                  type={"submit"}
                  handleClick={() => handleDeliverKey()}
                />
              </div>
            </UserContainer>
          )}
          <UsersListContainer>{currRoomUsersList}</UsersListContainer>
          <BackButton onClick={() => setCurrRoom("")}>voltar</BackButton>
        </SingleRoomContainer>
      )) || (
        <ClassRoomsContainer>
          <RequestContainer>
            <SearchForm
              onSearch={onSearch}
              placeholder={"SALA"}
              inputName={"room"}
            />
          </RequestContainer>

          <RoomsList>{roomsList}</RoomsList>
        </ClassRoomsContainer>
      )}
    </>
  );
}
