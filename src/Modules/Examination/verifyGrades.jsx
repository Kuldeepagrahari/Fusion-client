import React, { useState } from "react";
import {
  Table,
  Checkbox,
  Button,
  Select,
  Text,
  Container,
  Paper,
  Grid,
  ScrollArea,
  Box,
} from "@mantine/core";
// import { CheckCircle } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { id: "22bcs184", batch: 2023, semester: "SEM 1", marks: 86, grade: "B" },
  { id: "22bcs184", batch: 2024, semester: "SEM 2", marks: 56, grade: "A" },
  { id: "22bcs234", batch: 2024, semester: "SEM 3", marks: 23, grade: "C" },
  { id: "22bcs123", batch: 2022, semester: "SEM 4", marks: 99, grade: "C+" },
  { id: "22bcs234", batch: 2021, semester: "SEM 5", marks: 12, grade: "F" },
  { id: "22bcs345", batch: 2022, semester: "SEM 5", marks: 0, grade: "O" },
  { id: "22bcs124", batch: 2024, semester: "SEM 5", marks: 49, grade: "A+" },
  { id: "22bcs225", batch: 2023, semester: "SEM 5", marks: 69, grade: "B+" },
];

const gradeData = [
  { name: "A/A+", value: 30, color: "#4caf50" },
  { name: "B/B+", value: 25, color: "#2196f3" },
  { name: "C/C+", value: 35, color: "#ff9800" },
  { name: "D/D+", value: 10, color: "#f44336" },
  { name: "F", value: 0.2, color: "#9e9e9e" },
];

const COLORS = gradeData.map((entry) => entry.color);

function VerifyGrades() {
  const [verified, setVerified] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [batch, setBatch] = useState("");

  const handleVerify = () => setVerified(!verified);

  const handlePublish = () => {
    if (verified) {
      alert("Results published successfully!");
    } else {
      alert("Please verify the results before publishing.");
    }
  };

  const handleSearch = () => {
    setShowContent(true);
  };

  const rows = data.map((item) => (
    <tr key={item.id + item.semester}>
      <td>{item.id}</td>
      <td>{item.batch}</td>
      <td>{item.semester}</td>
      <td>{item.marks}</td>
      <td>{item.grade}</td>
    </tr>
  ));

  return (
    <Container
      size="xl"
      style={{
        borderRadius: "25px",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
        borderLeft: "10px solid #1E90FF",
        backgroundColor: "white",
      }}
    >
      <Paper p="md">
        <Text size="xl" weight={700} mb="md">
          Verify Grades
        </Text>
        <Grid>
          <Grid.Col xs={12} sm={4}>
            <Select
              label="Course"
              placeholder="Select course"
              value={course}
              onChange={setCourse}
              data={["CS3010", "CS3020", "CS3030"]}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            <Select
              label="Academic Year"
              placeholder="Select year"
              value={year}
              onChange={setYear}
              data={["2022-23", "2021-22", "2020-21"]}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            <Select
              label="Batch"
              placeholder="Select batch"
              value={batch}
              onChange={setBatch}
              data={["2021", "2022", "2023"]}
            />
          </Grid.Col>
        </Grid>
        <Box mt="md">
          <Button onClick={handleSearch} size="sm">
            Search
          </Button>
        </Box>

        {showContent && (
          <>
            <ScrollArea mt="lg">
              <Table striped highlightOnHover>
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Batch</th>
                    <th>Semester</th>
                    <th>Marks</th>
                    <th>Grades</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </ScrollArea>

            <Grid mt="xl">
              <Grid.Col xs={12} md={6}>
                <Paper shadow="xs" p="md">
                  <Text size="md" weight={500} align="center" mb="sm">
                    Statistics
                  </Text>
                  <PieChart width={400} height={300}>
                    <Pie
                      data={gradeData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {gradeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                    />
                  </PieChart>
                </Paper>
              </Grid.Col>
              <Grid.Col
                xs={12}
                md={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Checkbox
                  label="Results Verified"
                  checked={verified}
                  onChange={handleVerify}
                  // eslint-disable-next-line no-undef
                  icon={CheckCircle}
                />
                <Button
                  ml="md"
                  onClick={handlePublish}
                  color={verified ? "green" : "gray"}
                >
                  Publish
                </Button>
              </Grid.Col>
            </Grid>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default VerifyGrades;
