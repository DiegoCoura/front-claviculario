import { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import { getRoom } from "../../../utils/helperFunctions";
import { roomsDB } from "../../../mock-data/rooms";
import {
  BackButton,
  ClassRoomsContainer,
  ListContainer,
  SingleRoomContainer,
  Status,
} from "./ClassRoomsStyled";

export default function ClassRooms() {
  const { user } = useContext(UserContext);
  const [currRoom, setCurrRoom] = useState("");

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
      <button
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
      </button>
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
          <ListContainer>
            <h1>SALA: {currRoom.room}</h1>
            {currRoomUsersList}
          </ListContainer>
          <BackButton onClick={() => setCurrRoom("")}>voltar</BackButton>
        </SingleRoomContainer>
      )) || <ClassRoomsContainer>{roomsList}</ClassRoomsContainer>}
    </>
  );
}
