/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

import {
  Select,
  Button,
  // Table,
  TextInput,
  Grid,
  Text,
  Paper,
  Container,
  ScrollArea,
  Box,
} from "@mantine/core";

const courses = [
  "Software Engineering - CS3010",
  "Introduction to Programming in C - IT1001",
  "Artificial Intelligence - CS3001",
  "IOT - CS3010",
  "Database Management System(DBMS) - CS3010",
  "Data Structures and Algorithms - CS3010",
];

const years = ["2020-2021", "2021-2022", "2022-2023", "2023-2024"];

const studentData = [
  { id: "22bcs184", batch: 2023, sem: "SEM 1", year: 2021, marks: 86 },
  { id: "22bcs184", batch: 2024, sem: "SEM 2", year: 2022 },
  { id: "22bcs234", batch: 2024, sem: "SEM 3", year: 2023 },
  { id: "22bcs123", batch: 2024, sem: "SEM 4", year: 2023 },
  { id: "22bcs234", batch: 2021, sem: "SEM 5", year: 2025 },
  { id: "22bcs345", batch: 2022, sem: "SEM 5", year: 2025, marks: 75 },
  { id: "22bcs124", batch: 2020, sem: "SEM 5", year: 2025 },
  { id: "22bcs225", batch: 2023, sem: "SEM 5", year: 2025 },
];

import "./styles/submit.css";


function SubmitGrades() {
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");

  const [excelFile, setExcelFile] = useState(null);
  // const [grades, setGrades] = useState({});

  const handleFileChange = (event) => {
    setExcelFile(event.target.files[0]);

  const [showTable, setShowTable] = useState(false);
  const [buttonText, setButtonText] = useState("Search"); // State for button text
  const [grades, setGrades] = useState({
    0: "B",
    1: "A",
    2: "C",
    3: "C+",
    4: "F",
    5: "O",
    6: "A+",
    7: "B+",
  }); // State for grades

  const courses = [
    "Software Engineering - CS3010",
    "Introduction to Programming in C - IT1001",
    "Artificial Intelligence - CS3001",
    "IOT - CS3010",
    "Database Management System(DBMS) - CS3010",
    "Data Structures and Algorithms - CS3010",
  ];

  const years = ["2020-2021", "2021-2022", "2022-2023", "2023-2024"];

  const handleSearch = () => {
    setShowTable(true);
    setButtonText("Submit"); // Change button text to "Submit" when clicked
  };

  // const handleGradeChange = (index, value) => {
  //   setGrades((prevGrades) => ({
  //     ...prevGrades,
  //     [index]: value,
  //   }));
  // };

  // Check if all required fields are filled
  const isFormComplete = () => {
    return course && year && excelFile;
  };

  return (
    <div className="submit-grades-page">
      <div className="submit-grades-container">
        <h2>Submit Grades</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="course-select">Course</label>
            <select
              id="course-select"
              value={course}

              onChange={setCourse}
              required
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={6}>
            <Select
              label="Academic Year"
              placeholder="Select Year"
              data={years}
              value={year}
              onChange={setYear}
              required
            />
          </Grid.Col>
        </Grid>

        <Box mt="md">
          <TextInput
            type="file"
            label="Upload Excel Sheet"
            onChange={handleFileChange}
            accept=".xlsx, .xls"
            required
          />
        </Box>

        <Box mt="md">
          <Button
            size="sm"
            color={isFormComplete() ? "blue" : "gray"}
            disabled={!isFormComplete()}
          >
            Submit
          </Button>
        </Box>

        {studentData.length > 0 && (
          <ScrollArea>
            {/* <Table mt="lg" striped highlightOnHover>
=======
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Select Course</option>
              {courses.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="year-select">Academic Year</label>
            <select
              id="year-select"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Select Year</option>
              {years.map((y, index) => (
                <option key={index} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleSearch} className="search-btn">
            {buttonText} {/* Dynamically render the button text */}
          </button>
        </div>

        {showTable && (
          <div className="table-container">
            <table>

              <thead>
                <tr>
                  <th>Student ID &#x2193;</th>
                  <th>Batch</th>
                  <th>Semester</th>
                  <th>Academic Year</th>
                  <th>Marks &#x2193;</th>
                  <th>Grades</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "22bcs184",
                    batch: 2023,
                    sem: "SEM 1",
                    year: 2021,
                    marks: 86,
                  },
                  { id: "22bcs184", batch: 2024, sem: "SEM 2", year: 2022 },
                  { id: "22bcs234", batch: 2024, sem: "SEM 3", year: 2023 },
                  { id: "22bcs123", batch: 2024, sem: "SEM 4", year: 2023 },
                  { id: "22bcs234", batch: 2021, sem: "SEM 5", year: 2025 },
                  {
                    id: "22bcs345",
                    batch: 2022,
                    sem: "SEM 5",
                    year: 2025,
                    marks: 75,
                  },
                  { id: "22bcs124", batch: 2020, sem: "SEM 5", year: 2025 },
                  { id: "22bcs225", batch: 2023, sem: "SEM 5", year: 2025 },
                ].map((student, index) => (
                  <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.batch}</td>
                    <td>{student.sem}</td>
                    <td>{student.year}</td>
                    <td>
                      <input type="text" defaultValue={student.marks || ""} />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={grades[index] || ""}
                        onChange={(e) => handleGradeChange(index, e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>

            </Table> */}
          </ScrollArea>

            </table>
          </div>

        )}
      </div>
    </div>
  );
}

export default SubmitGrades;
