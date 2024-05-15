import { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import { Users } from "../../../mock-data/Users";
import { getRoom, getUser } from "../../../utils/helperFunctions";
import { roomsDB } from "../../../mock-data/rooms";
import {
  ClassRoomsContainer,
  SingleRoomContainer,
  Status,
} from "./ClassRoomsStyled";

export default function ClassRooms() {
  const { user } = useContext(UserContext);
  const [currRoom, setCurrRoom] = useState("");

  const currUser = getUser(Users, user);

  const selectRoom = (e) => {
    const tempRoom = getRoom(roomsDB, e.target.id);
    setCurrRoom(tempRoom);
  };

  const currUserRooms = currUser.classrooms.map((room) => {
    let currRoom = getRoom(roomsDB, room);
    return (
      <button key={room} id={room} onClick={(e) => selectRoom(e)}>
        <div>{currRoom.room}</div>
        <Status>{currRoom.status}</Status>
      </button>
    );
  });
  let currRoomUsersList
  if (currRoom) {
    currRoomUsersList = currRoom.users.map((person) => {
      return (
        <li key={person.email}>
          <div>
            {`${person.name} - ${person.phone}`}
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
          <h1>SALA: {currRoom.room}</h1>
          {currRoomUsersList}
        </SingleRoomContainer>
      )) || <ClassRoomsContainer>{currUserRooms}</ClassRoomsContainer>}
    </>
  );
}
