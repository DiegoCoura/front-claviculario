import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import { Users } from "../../../mock-data/Users";
import { getRoom, getUser } from "../../../utils/getFunctions";
import { roomsDB } from "../../../mock-data/rooms";
import { ClassRoomsContainer, Status } from "./ClassRoomsStyled";

export default function ClassRooms() {
  const { user } = useContext(UserContext);

  const currUser = getUser(Users, user);

  const currUsersRooms = currUser.classrooms.map((room) => {
    let currRoom = getRoom(roomsDB, room);
    return (
      <li key={room}>
        <div>{currRoom.room}</div>
        <Status>{currRoom.status}</Status>
      </li>
    );
  });

  return (
    <>
      <ClassRoomsContainer>{currUsersRooms}</ClassRoomsContainer>
    </>
  );
}
