export const getUser = (allUsers, singleUser) => {
    const currentUser = allUsers.find((person) => person.name === singleUser.name);
    return currentUser
}