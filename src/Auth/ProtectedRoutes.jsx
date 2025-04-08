import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const userInfo = sessionStorage.getItem('user');
  const user = userInfo ? JSON.parse(userInfo) : null;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token || !user) {
      navigate("/sign-in");  // Redirect if token or user not found
    } else {
      setLoading(false);  // Set loading to false once authentication is verified
    }
  }, [token, user, navigate]);

  // Render nothing until authentication check is complete
  if (loading) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
