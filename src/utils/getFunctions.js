export const getUser = (allUsers, singleUser) => {
  const currentUser = allUsers.find(
    (person) => person.name === singleUser.name
  );
  return currentUser;
};

export const getRoom = (allRooms, currentRoom) => {
  return allRooms.find((item) => item.room === currentRoom);
};
