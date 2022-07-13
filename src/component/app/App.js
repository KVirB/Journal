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
import GeneralGroupStatistic from "../Stats/generalGroupStatisticContainer";
import MainPageContainer from "../Main/mainPageContainer";
import FacultyStatistic from "../Stats/facultyStatisticContainer";
import TeacherProfile from "../Teacher/TeacherProfile";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/electronicaljournal-view" element={<Layout />}>
          <Route index element={<Login />} />
          <Route
            path="/electronicaljournal-view/journal"
            element={
              <RequireAuth role={["USER", "DISPETCHER"]}>
                <Combine />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/main"
            element={
              <RequireAuth role={["USER", "DISPETCHER"]}>
                <MainPageContainer />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/statistics"
            element={
              <RequireAuth role={["USER", "DISPETCHER"]}>
                <Statistics />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/studentbydiscipline"
            element={
              <RequireAuth role={["USER", "DISPETCHER"]}>
                <StudentByDiscipline />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/studentstatistic"
            element={
              <RequireAuth role={["USER", "DISPETCHER"]}>
                <StudentStatistic />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/generalgroupstatistic"
            element={
              <RequireAuth role={["USER", "DISPETCHER"]}>
                <GeneralGroupStatistic />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/facultystatistic"
            element={
              <RequireAuth role={["USER", "DISPETCHER"]}>
                <FacultyStatistic />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/teacher_profile"
            element={
              <RequireAuth role={["USER", "DISPETCHER"]}>
                <TeacherProfile></TeacherProfile>
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
