export const getUser = (usersDB, singleUser) => {
  const currentUser = usersDB.find((person) => person.name === singleUser.name);
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

export const deleteRequest = (requestsDB, reqId) => {
  const reqIndex = requestsDB.findIndex((req) => req.id === reqId);
  requestsDB.splice(reqIndex, 1);
};
