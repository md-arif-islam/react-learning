import react from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthConntext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  const location = useLocation();

  if (currentUser && currentUser.uid) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoute;
