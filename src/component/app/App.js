import { Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import Combine from "./Combine";
import Login from "../login/Login";
import Statistics from "../Stats/statisticsContainer";
import RequireAuth from "../../hoc/RequireAuth";
import AuthProvider from "../../hoc/AuthProvider";

import "./App.css";

const App = () => {
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
          <Route
            path="/electronicaljournal-view/statistics"
            element={<Statistics />}
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
