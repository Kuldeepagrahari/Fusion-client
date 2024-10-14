import { Routes, Route, Navigate } from "react-router-dom";
import SubmitGrades from "./submitGrades.jsx"; // Ensure the file exists and is named correctly
import VerifyGrades from "./verifyGrades.jsx"; // Ensure the file exists and is named correctly
// Uncomment this if you intend to use the Announcement component
// import Announcement from "./Announcement.jsx";
import GenerateTranscript from "./generateTranscript.jsx"; // Ensure the file exists and is named correctly
import SeatingPlan from "./seatingPlan.jsx"; // Ensure the file exists and is named correctly
import Nav from "./components/nav.jsx"; // Ensure the file exists and is named correctly
import { Layout } from "../../components/layout.jsx"; // Ensure the layout component is imported correctly
import StudentTranscript from "./components/studentTranscript.jsx"; // Ensure the file exists and is named correctly

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
        </Routes>
      </Layout>
    </div>
  );
}
