import { roomsDB } from "../mock-data/rooms";

export const getUser = (usersDB, singleUser) => {
  const currentUser = usersDB.find((person) => person.name === singleUser.name);
  return currentUser;
};

export const getUserByEmail = (usersDB, userEmail) => {
  const currentUser = usersDB.find((person) => person.email === userEmail);
  return currentUser;
};

export const getRoom = (roomsDB, currentRoom) => {
  return roomsDB.find((item) => item.room === currentRoom);
};

export const addUserToRoom = (roomsDB, currentReq) => {
  roomsDB.forEach((classRoom) => {
    if (classRoom.room === currentReq.id.split("_")[0])
      if (classRoom.users.find((user) => user.email === currentReq.email)) {
        return;
      } else {
        classRoom.users.push({
          name: currentReq.name,
          role: currentReq.role,
          email: currentReq.email,
          phone: currentReq.phone,
          status: "approved",
        });
      }
  });
};

export const deliverKey = (deliveredBy, deliveredTo, room) => {
  const roomIndex = roomsDB.findIndex((item) => item.room === room);

  if (roomsDB[roomIndex].status != "livre") return;

  const fullDate = new Date();
  const formattedDate = fullDate.toLocaleString("pt-BR", { timezone: "UTC" });

  const deliveryObj = {
    deliveredBy: {
      name: deliveredBy.name,
      role: deliveredBy.role,
      email: deliveredBy.email,
      phone: deliveredBy.phone,
    },
    deliveredTo: {
      name: deliveredTo.name,
      role: deliveredTo.role,
      email: deliveredTo.email,
      phone: deliveredTo.phone,
    },
    time: formattedDate,
  };

  roomsDB[roomIndex].status = deliveryObj;
};

export const returnKey = (room) => {
  const roomIndex = roomsDB.findIndex((item) => item.room === room);
  roomsDB[roomIndex].status = "livre";
};

export const deleteRequest = (requestsDB, reqId) => {
  const reqIndex = requestsDB.findIndex((req) => req.id === reqId);
  requestsDB.splice(reqIndex, 1);
};
