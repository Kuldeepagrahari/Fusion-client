import React, { useState } from "react";
import {
  Select,
  Button,
  Table,
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

function SubmitGrades() {
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [buttonText, setButtonText] = useState("Search");
  const [grades, setGrades] = useState({});

  const handleSearch = () => {
    setShowTable(true);
    setButtonText("Submit");
  };

  const handleGradeChange = (index, value) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [index]: value,
    }));
  };

  return (
    <Container size="xl">
      <Paper shadow="xs" p="md">
        <Text size="xl" weight={700} mb="md">
          Submit Grades
        </Text>
        <Grid>
          <Grid.Col xs={12} sm={6}>
            <Select
              label="Course"
              placeholder="Select Course"
              data={courses}
              value={course}
              onChange={setCourse}
              searchable
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
          <Button onClick={handleSearch} size="sm">
            {buttonText}
          </Button>
        </Box>

        {showTable && (
          <ScrollArea>
            <Table mt="lg" striped highlightOnHover>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Batch</th>
                  <th>Semester</th>
                  <th>Academic Year</th>
                  <th>Marks</th>
                  <th>Grades</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((student, index) => (
                  <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.batch}</td>
                    <td>{student.sem}</td>
                    <td>{student.year}</td>
                    <td>
                      <TextInput
                        defaultValue={student.marks || ""}
                        type="number"
                        min={0}
                        max={100}
                      />
                    </td>
                    <td>
                      <TextInput
                        value={grades[index] || ""}
                        onChange={(e) =>
                          handleGradeChange(index, e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ScrollArea>
        )}
      </Paper>
    </Container>
  );
}

export default SubmitGrades;