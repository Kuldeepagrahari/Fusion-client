import React from "react";
import { useLocation } from "react-router-dom";
import { Table, Title, Container, Paper, Text, Grid } from "@mantine/core";
import "../styles/transcript.css";

function StudentTranscript() {
  const location = useLocation();
  const { student } = location.state || { student: null }; // Fetch student data dynamically

  // Fallback to sample data if student is not found
  const sampleStudentData = student || {
    rollNumber: "22BCS001",
    name: "Student 1",
    semester: 8,
    courses: [
      {
        courseCode: "CS1001",
        courseName: "DSA",
        credits: "4",
        grade: "A",
      },
      {
        courseCode: "CS1002",
        courseName: "DBMS",
        credits: "4",
        grade: "B",
      },
      {
        courseCode: "CS1003",
        courseName: "Computer Networks",
        credits: "4",
        grade: "A+",
      },
      {
        courseCode: "CS1004",
        courseName: "Operating System",
        credits: "4",
        grade: "B+",
      },
      {
        courseCode: "CS1005",
        courseName: "Software Engineering",
        credits: "4",
        grade: "A",
      },
    ],
    semesterGPAs: {
      semester1: 8.4,
      semester2: 8.1,
      semester3: 7.9,
      semester4: 8.3,
      semester5: 8.5,
      semester6: 8.2,
      semester7: 8.6,
      semester8: 8.4,
    },
    overallGPA: 8.3,
  };

  const rows = sampleStudentData.courses.map((course, index) => (
    <tr key={index}>
      <td>{course.courseCode}</td>
      <td>{course.courseName}</td>
      <td>{course.credits}</td>
      <td>{course.grade}</td>
    </tr>
  ));

  const gpaRows = Object.entries(sampleStudentData.semesterGPAs).map(
    ([semester, gpa], index) => (
      <tr key={index}>
        <td>{semester}</td>
        <td>{gpa}</td>
      </tr>
    ),
  );

  return (
    <Container className="transcript-container" size="md">
      <Paper shadow="md" p="md" withBorder>
        <Title className="transcript-title" order={2}>
          Student Transcript
        </Title>
        <Grid gutter="lg">
          <Grid.Col span={6}>
            <Table highlightOnHover className="transcript-table">
              <thead>
                <tr>
                  <th scope="col">Course Code</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Credits</th>
                  <th scope="col">Grade</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Grid.Col>
          <Grid.Col span={6}>
            <Table highlightOnHover className="transcript-table">
              <thead>
                <tr>
                  <th scope="col">Semester</th>
                  <th scope="col">GPA</th>
                </tr>
              </thead>
              <tbody>{gpaRows}</tbody>
            </Table>
          </Grid.Col>
        </Grid>
        <Text className="transcript-gpa" mt="md" style={{ marginTop: "1rem" }}>
          Overall GPA: {sampleStudentData.overallGPA}
        </Text>
      </Paper>
    </Container>
  );
}

export default StudentTranscript;
