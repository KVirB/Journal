import { Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import Combine from "./Combine";
import Login from "../login/Login";
import Statistics from "../Stats/statisticsContainer";
import RequireAuth from "../../hoc/RequireAuth";
import AuthProvider from "../../hoc/AuthProvider";
import "./App.css";
import StudentByDiscipline from "../Stats/studentByDisciplineContainer";
import StudentStatistic from "../Stats/studentStatisticContainer";

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
            element={
              <RequireAuth>
                <Statistics />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/studentbydiscipline"
            element={
              <RequireAuth>
                <StudentByDiscipline />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/studentstatistic"
            element={
              <RequireAuth>
                <StudentStatistic />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
