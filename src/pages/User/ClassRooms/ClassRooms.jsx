import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import { Users } from "../../../mock-data/Users";
import { getUser } from "../../../utils/getUser";
import { rooms } from "../../../mock-data/rooms";

export default function ClassRooms() {
  const { user } = useContext(UserContext);

  const currUser = getUser(Users, user);

  const currUsersRooms = currUser.classrooms.map((room) => {
    let currRoom = rooms.find((roomDB) => roomDB.room === room);
    return <div key={room}>{currRoom.room} / {currRoom.status}</div>;
  });

  return (
    <>
      {currUsersRooms}
    </>
  );
}
