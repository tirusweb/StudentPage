import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import DefaultLayout from "../src/pages/defaultlayout/Defaultlayout";
import Home from "../src/pages/clien/Home/Home";
import ReminderNotes from "../src/pages/clien/InforGeneral/ReminderNotes/ReminderNotes";
import InforStudent from "../src/pages/clien/InforGeneral/InforStudent/InforStudent";
import UpdateStudent from "../src/pages/clien/InforGeneral/UpdateStudent/UpdateStudent";
import TemPlates from "../src/pages/clien/InforGeneral/TemPlate/Template";
import ListProfiles from "../src/pages/clien/InforGeneral/ListProfile/ListProfile";
import StudyResuit from "../src/pages/clien/Study/StudyResuilt/StudyResuilt";
import WeeklyCalendar from "../src/pages/clien/Study/WeeklyCalendar/WeeklyCalendar";
import WeekProgress from "../src/pages/clien/Study/WeekProgress/WeekProgress";
import SchoolCalender from "../src/pages/clien/Study/SchoolCalender/SchoolCalender";
import ScoreInformation from "../src/pages/clien/Study/ScoreInformation/ScoreInformation";
import LearningOutcomes from "../src/pages/clien/Study/LearningOutcomes/LearningOutcomes";
import ExamPlan from "../src/pages/clien/Study/ExamPlan/ExamPlan";
import Reward from "./pages/clien/Study/Reward/Reward";
import FramworkProgram from "./pages/clien/Course/FrameWorkProgram/FrameworkProgram";
import RegisterCourse from "./pages/clien/Course/RegisterCourse/RegisterCourse";
import RegisterForExam from "./pages/clien/Course/RegisterForExam/RegisterForExam";
import RegisterCondition from "./pages/clien/Course/RegisterCondition/RegisterCondition";
import OnlinePayment from "./pages/clien/Tuition/OnlinePayment/OnlinePayment";
import Consolidated from "./pages/clien/Tuition/Consolidated/Consolidated";
import ContactAnswers from "./pages/clien/Other/ContactAnswers/ContactAnswers";
import ContactForFeedback from "./pages/clien/Other/ContactForFeedback/ContactForFeedback";
import Mailbox from "./pages/clien/Other/Mailbox/Mailbox";
import DebtLookup from "./pages/clien/Tuition/DebtLookup/DebtLookup";
import Login from "./Login/Login";

function App() {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("isAuthenticated:", true);
  };
  const handleLoading = (status) => {
    setLoading(status);
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          </div>
        )}
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <Login
                handleLogin={handleLogin}
                isAuthenticated={isAuthenticated}
                handleLoading={handleLoading}
              />
            }
          />
          {/* Protected Routes */}
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<Home handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/ghi-chu-nhac-nho"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<ReminderNotes handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/thong-tin-sinh-vien"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<InforStudent handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/de-xuat-bieu-mau"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<TemPlates handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/cap-nhat-thong-tin"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<UpdateStudent handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/danh-sach-ho-so"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<ListProfiles handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          {/* Học tập */}
          <Route
            exact
            path="/ket-qua-hoc-tap"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<StudyResuit handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/lich-hoc-theo-tuan"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<WeeklyCalendar handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/lich-theo-tien-do"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<WeekProgress handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/lich-toan-truong"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<SchoolCalender handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/thong-tin-diem-danh"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<ScoreInformation handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/ket-qua-ren-luyen"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<LearningOutcomes handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/ke-hoach-thi"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<ExamPlan handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/khen-thuong"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<Reward handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/chuong-trinh-khung"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<FramworkProgram handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/dang-ki-hoc-phan"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<RegisterCourse handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/dang-ki-thi"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<RegisterForExam handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/dang-ki-mon-hoc-dieu-kien"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<RegisterCondition handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/thanh-toan-truc-tuyen"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<OnlinePayment handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/phieu-thu-tong-hop"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<Consolidated handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/lien-he-giai-dap-thac-mac"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<ContactAnswers handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/lien-he-gop-y"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={
                    <ContactForFeedback handleLoading={handleLoading} />
                  }
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/hop-thu-sinh-vien"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<Mailbox handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/tra-cuu-cong-no"
            element={
              <PrivateRoute>
                <DefaultLayout
                  children={<DebtLookup handleLoading={handleLoading} />}
                />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
