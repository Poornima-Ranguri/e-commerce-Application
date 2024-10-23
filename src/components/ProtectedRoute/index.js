import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";

const ProtectedRoute = ({ component: Component }) => {
  const token = Cookie.get("jwt_token");

  // If there's no token, redirect to the login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Render the component if the token exists
  return <Component />;
};

export default ProtectedRoute;
