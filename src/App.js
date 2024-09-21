import React from "react";
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

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <DefaultLayout children = {<Home/>}/>
            }
          />
          <Route
            exact
            path="/ghi-chu-nhac-nho"
            element={
              <DefaultLayout children = {<ReminderNotes/>}/>
            }
          />
          <Route
            exact
            path="/thong-tin-sinh-vien"
            element={
              <DefaultLayout children = {<InforStudent/>}/>
            }
          />
           <Route
            exact
            path="/de-xuat-bieu-mau"
            element={
              <DefaultLayout children = {<TemPlates/>}/>
            }
          /> 
          <Route
            exact
            path="/cap-nhat-thong-tin"
            element={
              <DefaultLayout children = {<UpdateStudent/>}/>
            }
          />
          
           <Route
            exact
            path="/danh-sach-ho-so"
            element={
              <DefaultLayout children = {<ListProfiles/>}/>
            }
          />

          {/* Học tập */}
          <Route
            exact
            path="/ket-qua-hoc-tap"
            element={
              <DefaultLayout children = {<StudyResuit/>}/>
            }
          />
          <Route
            exact
            path="/lich-hoc-theo-tuan"
            element={
              <DefaultLayout children = {<WeeklyCalendar/>}/>
            }
          />
           <Route
            exact
            path="/lich-theo-tien-do"
            element={
              <DefaultLayout children = {<WeekProgress/>}/>
            }
          />
           <Route
            exact
            path="/lich-toan-truong"
            element={
              <DefaultLayout children = {<SchoolCalender/>}/>
            }
          />
            <Route
            exact
            path="/thong-tin-diem-danh"
            element={
              <DefaultLayout children = {<ScoreInformation/>}/>
            }
          />
          <Route
            exact
            path="/ket-qua-ren-luyen"
            element={
              <DefaultLayout children = {<LearningOutcomes/>}/>
            }
          />
            <Route
            exact
            path="/ke-hoach-thi"
            element={
              <DefaultLayout children = {<ExamPlan/>}/>
            }
          />
            <Route
            exact
            path="/khen-thuong"
            element={
              <DefaultLayout children = {<Reward/>}/>
            }
          />
           <Route
            exact
            path="/chuong-trinh-khung"
            element={
              <DefaultLayout children = {<FramworkProgram/>}/>
            }
          />
           <Route
            exact
            path="/dang-ki-hoc-phan"
            element={
              <DefaultLayout children = {<RegisterCourse/>}/>
            }
          />
           <Route
            exact
            path="/dang-ki-thi"
            element={
              <DefaultLayout children = {<RegisterForExam/>}/>
            }
          />
           <Route
            exact
            path="/dang-ki-mon-hoc-dieu-kien"
            element={
              <DefaultLayout children = {<RegisterCondition/>}/>
            }
          />
           <Route
            exact
            path="/thanh-toan-truc-tuyen"
            element={
              <DefaultLayout children = {<OnlinePayment/>}/>
            }
          />
           <Route
            exact
            path="/phieu-thu-tong-hop"
            element={
              <DefaultLayout children = {<Consolidated/>}/>
            }
          />
           <Route
            exact
            path="/lien-he-giai-dap-thac-mac"
            element={
              <DefaultLayout children = {<ContactAnswers/>}/>
            }
          />
           <Route
            exact
            path="/lien-he-gop-y"
            element={
              <DefaultLayout children = {<ContactForFeedback/>}/>
            }
          />
           <Route
            exact
            path="/hop-thu-sinh-vien"
            element={
              <DefaultLayout children = {<Mailbox/>}/>
            }
          />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
