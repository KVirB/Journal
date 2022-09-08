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
import ManagementPage from "../ManagementPage/ManagementPage";
import ManagementPageContainer from "../ManagementPage/managementPageContainer";

const App = () => {
  return (
    <AuthProvider>
      {/* {console.log(JSON.stringify(user) + "ABRAHAM")} */}
      <Routes>
        <Route path="/electronicaljournal-view" element={<Layout />}>
          <Route index element={<Login />} />
          <Route
            path="/electronicaljournal-view/journal"
            element={
              <RequireAuth role={["USER", "HEAD_OF_DEPARTMENT"]}>
                <Combine />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/main"
            element={
              <RequireAuth role={["USER", "HEAD_OF_DEPARTMENT"]}>
                <MainPageContainer />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/statistics"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT"]}>
                <Statistics />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/studentbydiscipline"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT"]}>
                <StudentByDiscipline />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/studentstatistic"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT"]}>
                <StudentStatistic />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/generalgroupstatistic"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT"]}>
                <GeneralGroupStatistic />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/facultystatistic"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT"]}>
                <FacultyStatistic />
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/teacher_profile"
            element={
              <RequireAuth role={["USER", "HEAD_OF_DEPARTMENT"]}>
                <TeacherProfile></TeacherProfile>
              </RequireAuth>
            }
          />
          <Route
            path="/electronicaljournal-view/management_page"
            element={
              <RequireAuth role={["USER", "HEAD_OF_DEPARTMENT"]}>
                <ManagementPageContainer></ManagementPageContainer>
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
