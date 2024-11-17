/* eslint-disable import/no-unresolved */
import { Routes, Route, Navigate } from "react-router-dom";
import SubmitGrades from "./SubmitGrades.jsx"; // Ensure the file exists and is named correctly
import VerifyGrades from "./VerifyGrades.jsx"; // Ensure the file exists and is named correctly
// Uncomment this if you intend to use the Announcement component
// import Announcement from "./Announcement.jsx";
import GenerateTranscript from "./GenerateTranscript.jsx"; // Ensure the file exists and is named correctly
import SeatingPlan from "./SeatingPlan.jsx"; // Ensure the file exists and is named correctly
import Nav from "./components/Nav.jsx"; // Ensure the file exists and is named correctly
import { Layout } from "../../components/layout.jsx"; // Ensure the layout component is imported correctly
import StudentTranscript from "./components/StudentTranscript.jsx"; // Ensure the file exists and is named correctly
import Announcement from "./Announcement.jsx";

export default function Examination() {
  return (
    <div>
      <Layout>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/examination/submit-grades" replace />}
          />
          {/* <Route path="/" element={<Navigate to="/examination/submit-grades" replace />} /> */}
          {/* Nested routes */}
          <Route path="/submit-grades" element={<SubmitGrades />} />
          <Route path="/verify-grades" element={<VerifyGrades />} />
          {/* Uncomment this route if you want to use the Announcement component */}
          {/* <Route path="/announcement" element={<Announcement />} /> */}
          <Route path="/generate-transcript" element={<GenerateTranscript />} />
          <Route
            path="/generate-transcript/:rollNumber"
            element={<StudentTranscript />}
          />
          <Route path="/seating-plan" element={<SeatingPlan />} />
          <Route path="/announcement" element={<Announcement />} />
        </Routes>
      </Layout>
    </div>
  );
}
