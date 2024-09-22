import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


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

function App() {
  const [loading, setLoading] = useState(false);
  const handleLoading = (status) => {
    setLoading(status); 
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
            path="/"
            element={
              <DefaultLayout children = {<Home handleLoading={handleLoading}/>}/>
            }
          />
          <Route
            exact
            path="/ghi-chu-nhac-nho"
            element={
              <DefaultLayout children = {<ReminderNotes handleLoading={handleLoading}/>}/>
            }
          />
          <Route
            exact
            path="/thong-tin-sinh-vien"
            element={
              <DefaultLayout children = {<InforStudent handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/de-xuat-bieu-mau"
            element={
              <DefaultLayout children = {<TemPlates handleLoading={handleLoading}/>}/>
            }
          /> 
          <Route
            exact
            path="/cap-nhat-thong-tin"
            element={
              <DefaultLayout children = {<UpdateStudent handleLoading={handleLoading}/>}/>
            }
          />
          
           <Route
            exact
            path="/danh-sach-ho-so"
            element={
              <DefaultLayout children = {<ListProfiles handleLoading={handleLoading}/>}/>
            }
          />

          {/* Học tập */}
          <Route
            exact
            path="/ket-qua-hoc-tap"
            element={
              <DefaultLayout children = {<StudyResuit handleLoading={handleLoading}/>}/>
            }
          />
          <Route
            exact
            path="/lich-hoc-theo-tuan"
            element={
              <DefaultLayout children = {<WeeklyCalendar handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/lich-theo-tien-do"
            element={
              <DefaultLayout children = {<WeekProgress handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/lich-toan-truong"
            element={
              <DefaultLayout children = {<SchoolCalender handleLoading={handleLoading}/>}/>
            }
          />
            <Route
            exact
            path="/thong-tin-diem-danh"
            element={
              <DefaultLayout children = {<ScoreInformation handleLoading={handleLoading}/>}/>
            }
          />
          <Route
            exact
            path="/ket-qua-ren-luyen"
            element={
              <DefaultLayout children = {<LearningOutcomes handleLoading={handleLoading}/>}/>
            }
          />
            <Route
            exact
            path="/ke-hoach-thi"
            element={
              <DefaultLayout children = {<ExamPlan handleLoading={handleLoading}/>}/>
            }
          />
            <Route
            exact
            path="/khen-thuong"
            element={
              <DefaultLayout children = {<Reward handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/chuong-trinh-khung"
            element={
              <DefaultLayout children = {<FramworkProgram handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/dang-ki-hoc-phan"
            element={
              <DefaultLayout children = {<RegisterCourse handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/dang-ki-thi"
            element={
              <DefaultLayout children = {<RegisterForExam handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/dang-ki-mon-hoc-dieu-kien"
            element={
              <DefaultLayout children = {<RegisterCondition handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/thanh-toan-truc-tuyen"
            element={
              <DefaultLayout children = {<OnlinePayment handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/phieu-thu-tong-hop"
            element={
              <DefaultLayout children = {<Consolidated handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/lien-he-giai-dap-thac-mac"
            element={
              <DefaultLayout children = {<ContactAnswers handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/lien-he-gop-y"
            element={
              <DefaultLayout children = {<ContactForFeedback handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/hop-thu-sinh-vien"
            element={
              <DefaultLayout children = {<Mailbox handleLoading={handleLoading}/>}/>
            }
          />
           <Route
            exact
            path="/tra-cuu-cong-no"
            element={
              <DefaultLayout children = {<DebtLookup handleLoading={handleLoading}/>}/>
            }
          />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
