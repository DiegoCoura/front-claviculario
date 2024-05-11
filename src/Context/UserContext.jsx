import { createContext, useState } from "react";
import { Users } from "../mock-data/Users";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(Users[0]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
