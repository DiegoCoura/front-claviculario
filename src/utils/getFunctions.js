export const getUser = (usersDB, singleUser) => {
  const currentUser = usersDB.find(
    (person) => person.name === singleUser.name
  );
  return currentUser;
};

export const getRoom = (roomsDB, currentRoom) => {
  return roomsDB.find((item) => item.room === currentRoom);
};
