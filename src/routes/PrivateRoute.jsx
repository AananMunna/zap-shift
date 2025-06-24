// src/routes/PrivateRoute.jsx
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="h-screen bg-white flex justify-center items-center"><span className="loading loading-spinner text-success"></span>
</div>; // You can show a spinner here

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
