import React, { useState } from "react";
import { Table, Checkbox, Button, Select, Text } from "@mantine/core";
import { CheckCircle } from "@phosphor-icons/react";
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
  const [showContent, setShowContent] = useState(false); // State to manage content visibility

  const handleVerify = () => setVerified(!verified);

  const handlePublish = () => {
    if (verified) {
      alert("Results published successfully!");
    } else {
      alert("Please verify the results before publishing.");
    }
  };

  const handleSearch = () => {
    setShowContent(true); // Show content after clicking Search button
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
    <div style={{ padding: "1rem", backgroundColor: "transparent" }}>
      {/* Horizontal Select Options */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
        }}
      >
        <Select
          label="Course"
          placeholder="Select course"
          defaultValue="CS3010"
          data={["CS3010", "CS3020", "CS3030"]}
          style={{ width: "30%" }}
        />
        <Select
          label="Academic Year"
          placeholder="Select year"
          defaultValue="2022-23"
          data={["2022-23", "2021-22", "2020-21"]}
          style={{ width: "30%" }}
        />
        <Select
          label="Batch"
          placeholder="Select batch"
          defaultValue="2022"
          data={["2021", "2022", "2023"]}
          style={{ width: "30%" }}
        />
      </div>

      {/* Search Button */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Conditionally render content based on the search button click */}
      {showContent && (
        <>
          {/* Scrollable Grades Table */}
          <div
            style={{
              maxHeight: "300px",
              overflowY: "scroll",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "0.5rem",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Table withBorder withColumnBorders striped highlightOnHover>
              <thead>
                <tr>
                  <th style={{ backgroundColor: "#0e99f6", color: "white" }}>
                    Student ID
                  </th>
                  <th style={{ backgroundColor: "#0e99f6", color: "white" }}>
                    Batch
                  </th>
                  <th style={{ backgroundColor: "#0e99f6", color: "white" }}>
                    Semester
                  </th>
                  <th style={{ backgroundColor: "#0e99f6", color: "white" }}>
                    Marks
                  </th>
                  <th style={{ backgroundColor: "#0e99f6", color: "white" }}>
                    Grades
                  </th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </div>

          {/* Bottom Section with Pie Chart and Checkbox + Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            {/* Pie Chart in a Box */}
            <div
              style={{
                width: "50%",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text size="md" weight={500} align="center" mb="sm">
                Statistics
              </Text>
              <PieChart width={500} height={300}>
                <Pie
                  data={gradeData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
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
                  verticalAlign="bottom"
                  align="right"
                />
              </PieChart>
            </div>

            {/* Checkbox and Publish Button on the same level */}
            <div style={{ display: "flex", alignItems: "middle" }}>
              <Checkbox
                label="Results Verified"
                checked={verified}
                onChange={handleVerify}
                icon={CheckCircle}
              />
              <Button
                style={{ marginLeft: "1rem" }}
                onClick={handlePublish}
                color={verified ? "green" : "gray"}
              >
                Publish
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default VerifyGrades;
