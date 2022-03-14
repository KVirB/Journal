import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Layout from "../Layout";
import Combine from "./Combine";
import Login from "../login/Login";

import RequireAuth from "../../hoc/RequireAuth";
import AuthProvider from "../../hoc/AuthProvider";
// import { useAuth } from "../../hooks/useAuth";

import "./App.css";

const App = () => {
  // const { signIn } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     signIn(localStorage.getItem("user"), () =>
  //       navigate("/electronicaljournal-view/journal", { replace: true })
  //     );
  //   }
  // }, []);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/electronicaljournal-view" element={<Layout />}>
          <Route index element={<Login />} />
          <Route
            path="/electronicaljournal-view/journal"
            element={
              <RequireAuth>
                <Combine />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
