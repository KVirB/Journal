import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
// import { useSelector } from 'react-redux';

export default function RequireAuth({ children, role }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <Navigate
        to="/electronicaljournal-view"
        state={{ from: location }}
        replace
      />
    );
  }
  // if (user) {
  //   user.roles.forEach((element) => {
  //     console.log(user.roles);
  //     console.log(role.indexOf());
  //     if (role.indexOf(element) === -1) {
  //       localStorage.removeItem("user");
  //       signOut(() => navigate("/electronicaljournal-view", { replace: true }));
  //       console.log(role.indexOf(element), element);
  //     }
  //   });
  // }

  return children;
}
