import React, { useState } from "react";
import { Button, Select, Container, Text, Group, Space } from "@mantine/core";
// import CustomBreadcrumbs from "../../components/Breadcrumbs";
import "./styles/transcript.css";

function SeatingPlan() {
  const [formData, setFormData] = useState({
    title: "",
    shift: "",
    years: "",
    branch: "",
    classroom: "",
  });

  const handleChange = (field) => (value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ShowSeatingPlan(true);
  };

  return (
    <Container size="md" className="min-h-screen p-6">
      <Text size="xl" weight={700} className="mb-6">
        Seating Plan
      </Text>
      <form onSubmit={handleSubmit}>
        <Group grow spacing="md">
          {/* Title */}
          <Select
            label="Title"
            placeholder="Select Title"
            data={[
              { value: "midsem", label: "Mid-Sem" },
              { value: "endsem", label: "End-Sem" },
            ]}
            value={formData.title}
            onChange={handleChange("title")}
          />

          {/* Shift */}
          <Select
            label="Shift"
            placeholder="Select Shift"
            data={[
              { value: "morning", label: "Morning" },
              { value: "afternoon", label: "Afternoon" },
            ]}
            value={formData.shift}
            onChange={handleChange("shift")}
          />

          {/* Branch */}
          <Select
            label="Branch"
            placeholder="Select Branch"
            data={[
              { value: "cse", label: "CSE" },
              { value: "ece", label: "ECE" },
              { value: "me", label: "ME" },
              { value: "sm", label: "SM" },
              { value: "bdes", label: "BDES" },
            ]}
            value={formData.branch}
            onChange={handleChange("branch")}
          />

          {/* Years */}
          <Select
            label="Years"
            placeholder="Select Years"
            data={[
              { value: "2021", label: "2021" },
              { value: "2022", label: "2022" },
              { value: "2023", label: "2023" },
              { value: "2024", label: "2024" },
            ]}
            value={formData.years}
            onChange={handleChange("years")}
          />
          {/* Classroom */}
          <Select
            label="Classroom"
            placeholder="Select Classroom"
            data={[
              { value: "L102", label: "L102" },
              { value: "L104", label: "L104" },
              { value: "L105", label: "L105" },
              { value: "L106", label: "L106" },
            ]}
            value={formData.classroom}
            onChange={handleChange("classroom")}
          />
        </Group>

        <Space h="md" />

        <Button type="submit" onClick={handleSubmit} variant="filled">
          Search
        </Button>
      </form>
    </Container>
  );
}

export default SeatingPlan;
