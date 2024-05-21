import { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import { getRoom, getUserByEmail } from "../../../utils/helperFunctions";
import { roomsDB } from "../../../mock-data/rooms";
import {
  BackButton,
  ClassRoomsContainer,
  UsersListContainer,
  SingleRoomContainer,
  Status,
  RoomsList,
  RoomButton,
} from "./ClassRoomsStyled";
import { useForm } from "react-hook-form";
import { RequestContainer } from "../ClassRequests/ClassRequestsStyled";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Users } from "../../../mock-data/Users";

export default function ClassRooms() {
  const { user } = useContext(UserContext);
  const [currRoom, setCurrRoom] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const {
    register: registerSearch,
    handleSubmit: handleSearch,
    reset,
  } = useForm();

  const onSearch = (data) => {
    if (!data.email) return;
    const { email } = data;
    const searchUser = getUserByEmail(Users, email.toLowerCase());
    setCurrentUser(searchUser);

    reset();
  };

  const selectRoom = (e) => {
    const tempRoom = getRoom(roomsDB, e.target.id);
    setCurrRoom(tempRoom);
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
        <Status>{currRoom.status}</Status>
      </RoomButton>
    );
  });
  let currRoomUsersList;
  if (currRoom) {
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
          <UsersListContainer>
            <h1>SALA: {currRoom.room}</h1>
            {currRoomUsersList}
          </UsersListContainer>
          <BackButton onClick={() => setCurrRoom("")}>voltar</BackButton>
        </SingleRoomContainer>
      )) || (
        <ClassRoomsContainer>
          <RequestContainer>
            <form action="" onSubmit={handleSearch(onSearch)}>
              <Input
                type="text"
                placeholder="email"
                name="email"
                register={registerSearch}
              />
              <Button type={"submit"} text={"Buscar usuário"} />
            </form>
          </RequestContainer>
          <RoomsList>{roomsList}</RoomsList>
        </ClassRoomsContainer>
      )}
    </>
  );
}
