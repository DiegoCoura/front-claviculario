import { useState } from "react";
import { getRoom } from "../../../utils/getFunctions";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";
import { roomsDB } from "../../../mock-data/rooms";
import Button from "../../../components/Button/Button";
import { ClassRequestContainer, RequestContainer, ResultContainer } from "./ClassRequestsStyled";

export default function ClassRequests() {
  const [currentRoom, setCurrentRoom] = useState("");
  const {
    register: registerSearch,
    handleSubmit: handleSearch,
    reset,
  } = useForm();

  const onSearch = (data) => {
    const { room } = data;
    const currRoom = getRoom(roomsDB, room.toUpperCase());
    setCurrentRoom(currRoom);
    reset()
  };

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
            <Button type={"submit"} text={"Buscar Sala"}>
              Solicitar Acesso
            </Button>
          </form>
        </RequestContainer>
        {currentRoom && (
          <ResultContainer>
            <div>
              {currentRoom.room} {currentRoom.status}
            </div>
            <Button text={"solicitar Acesso"} type={"submit"} />
          </ResultContainer>
        )}
      </ClassRequestContainer>
    </>
  );
}
