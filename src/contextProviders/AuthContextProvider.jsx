import {createContext, memo, useState} from "react";
import {FetchAPI} from "../services/FetchAPI.js";

export const AuthContext = createContext();

const AuthContextProvider=memo(function AuthContextProvider({ children }) {

  const [isAuthed, setAuthed] = useState(FetchAPI.fetchFromLocaleStorage('user')==="verified")
  return (
    <AuthContext.Provider value={[isAuthed, setAuthed]}>
      {children}
    </AuthContext.Provider>
  );
})

export default AuthContextProvider
