import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
// import { useSelector } from 'react-redux';

function RequireAuth({ children }) {
  const location = useLocation();
  const { user } = useAuth();

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
