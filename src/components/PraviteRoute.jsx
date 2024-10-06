import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../lib/firebase";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>; // Show a loading spinner or message while checking the auth state
  }

  if (!user) {
    return <Navigate to="/login" />; // Redirect to the sign-in page if the user is not authenticated
  }

  return children; // Render the protected route content if authenticated
};

export default PrivateRoute;
