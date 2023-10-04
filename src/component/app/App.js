import { Routes, Route } from "react-router-dom";
import { React } from "react";
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
import TeacherProfile from "../Teacher/teacherProfileContainer";
import ManagementPageContainer from "../ManagementPage/managementPageContainer";
import AdditionalGradeContainer from "../AdditionalGrade/AdditionalGradeContainer";

const App = () => {
  return (
    <AuthProvider>
      {/* {console.log(JSON.stringify(user) + "ABRAHAM")} */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route
            path="/journal"
            element={
              <RequireAuth role={["USER", "HEAD_OF_DEPARTMENT", "RECTOR"]}>
                <Combine />
              </RequireAuth>
            }
          />
          <Route
            path="/main"
            element={
              <RequireAuth role={["USER", "HEAD_OF_DEPARTMENT", "RECTOR"]}>
                <MainPageContainer />
              </RequireAuth>
            }
          />
          <Route
            path="/statistics"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT", "RECTOR", "USER"]}>
                <Statistics />
              </RequireAuth>
            }
          />
          <Route
            path="/studentbydiscipline"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT", "RECTOR", "USER"]}>
                <StudentByDiscipline />
              </RequireAuth>
            }
          />
          <Route
            path="/studentstatistic"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT", "RECTOR", "USER"]}>
                <StudentStatistic />
              </RequireAuth>
            }
          />
          <Route
            path="/generalgroupstatistic"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT", "RECTOR", "USER"]}>
                <GeneralGroupStatistic />
              </RequireAuth>
            }
          />
          <Route
            path="/facultystatistic"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT", "RECTOR", "USER"]}>
                <FacultyStatistic />
              </RequireAuth>
            }
          />
          <Route
            path="/teacher_profile"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT", "USER", "RECTOR"]}>
                <TeacherProfile></TeacherProfile>
              </RequireAuth>
            }
          />
          <Route
            path="/management_page"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT", "RECTOR"]}>
                <ManagementPageContainer></ManagementPageContainer>
              </RequireAuth>
            }
          />
          <Route
            path="/additional_grade"
            element={
              <RequireAuth role={["HEAD_OF_DEPARTMENT", "RECTOR", "USER"]}>
                <AdditionalGradeContainer></AdditionalGradeContainer>
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
