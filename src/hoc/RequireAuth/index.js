import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
// import { useSelector } from 'react-redux';

function RequireAuth({ children }) {
  const location = useLocation();
  const { user } = useAuth();
  // const token = useSelector((state) => state.user.token);
  // const token = localStorage.getItem('token');

  if (!user) {
    return (
      <Navigate
        to="/electronicaljournal-view"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default RequireAuth;
