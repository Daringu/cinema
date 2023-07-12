import { useContext } from "react";
import { AuthContext } from "../../contextProviders/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function ProtectedComponent({ children }) {
  const [isAuthed] = useContext(AuthContext);
  if (!isAuthed) {
    return <Navigate to={"/welcome"} />;
  }
  return children;
}
