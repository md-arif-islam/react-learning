import react from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthConntext";

const PublicRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return !currentUser ? children : <Navigate to={"/"} />;
};

export default PublicRoute;
