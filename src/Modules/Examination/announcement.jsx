import React, { useState } from "react";
import {
  Container,
  Paper,
  Select,
  TextInput,
  Textarea,
  Button,
  Stack,
  Group,
  Text,
  Badge,
  Card,
  Modal,
  FileInput,
  Alert,
  SimpleGrid,
} from "@mantine/core";
import { Bell, CalendarBlank, User, FileText, X } from "@phosphor-icons/react";
import "./styles/announcement.css";

const initialAnnouncements = [
  {
    id: 1,
    author: "Prof. Atul Gupta",
    category: "Improvement",
    date: "2023-10-01",
    tags: ["Academics", "CSE", "Btech", "2023"],
    description:
      "In this regard, you are required to deposit the fee of Rs 1000/- (Rs. One Thousand only) if you are registered in one course and Rs. 2000/- (Rs. Two Thousand only) if you register in two courses at below link and after fee submission fill your details in the shared google form (here) latest by 5th October 2024.",
  },
  {
    id: 2,
    author: "Prof. Vipul Mathur",
    category: "Revised Books",
    date: "2023-10-02",
    tags: ["Academics", "CSE", "Btech", "2023"],
    description:
      "The syllabus for Data Structures has been updated. Please review the changes before next class.",
  },
];

// eslint-disable-next-line react/prop-types
function CustomTab({ isActive, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      // className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border-b-2 transition-all duration-300 ease-in-out transform ${
      //   isActive
      //     ? "border-blue-500 text-blue-600 bg-blue-50 shadow-sm scale-105"
      //     : "border-transparent text-gray-500 hover:text-blue-500 hover:bg-gray-100 hover:shadow-md hover:border-gray-300"
      // }`}
      style={isActive ? { backgroundColor: "#1e90ff", color: "white" } : {}}
      className="announcement-tab"
    >
      <Icon weight={isActive ? "fill" : "regular"} size={20} />
      {label}
    </button>
  );
}

function Announcement() {
  const [activeTab, setActiveTab] = useState("make");
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({
    category: "",
    author: "",
    description: "",
    programme: "",
    batch: "",
    department: "",
  });
  const [files, setFiles] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (name, value) => {
    setNewAnnouncement((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const validateForm = () => {
    if (
      !newAnnouncement.programme ||
      !newAnnouncement.batch ||
      !newAnnouncement.department ||
      !newAnnouncement.category ||
      !newAnnouncement.description
    ) {
      setError("Please fill in all required fields");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newId =
      announcements.length > 0
        ? Math.max(...announcements.map((a) => a.id)) + 1
        : 1;

    const announcement = {
      ...newAnnouncement,
      id: newId,
      date: new Date().toISOString().split("T")[0],
      tags: [
        newAnnouncement.programme,
        newAnnouncement.batch,
        newAnnouncement.department,
      ],
      author: "Current User",
    };

    setAnnouncements((prev) => [...prev, announcement]);
    setNewAnnouncement({
      category: "",
      author: "",
      description: "",
      programme: "",
      batch: "",
      department: "",
    });
    setFiles(null);
    setActiveTab("browse");
    setError("");
  };

  const renderMakeAnnouncement = () => (
    <Paper
      shadow="sm"
      radius="md"
      p="xl"
      withBorder
      style={{
        border: "1px solid #ccc",
        borderRadius: "25px",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
        borderLeft: "10px solid #1E90FF",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing="md">
          {error && (
            <Alert
              color="red"
              icon={<X size={16} />}
              withCloseButton
              onClose={() => setError("")}
            >
              {error}
            </Alert>
          )}

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
            <Select
              label="Programme"
              placeholder="Select Programme"
              data={[
                { value: "Btech", label: "B.Tech" },
                { value: "Mtech", label: "M.Tech" },
                { value: "PhD", label: "Ph.D" },
              ]}
              value={newAnnouncement.programme}
              onChange={(value) => handleInputChange("programme", value)}
              required
            />
            <Select
              label="Batch"
              placeholder="Select Batch"
              data={["2021", "2022", "2023"].map((year) => ({
                value: year,
                label: year,
              }))}
              value={newAnnouncement.batch}
              onChange={(value) => handleInputChange("batch", value)}
              required
            />
            <Select
              label="Department"
              placeholder="Select Department"
              data={[
                { value: "CSE", label: "Computer Science" },
                { value: "ECE", label: "Electronics" },
                { value: "ME", label: "Mechanical" },
              ]}
              value={newAnnouncement.department}
              onChange={(value) => handleInputChange("department", value)}
              required
            />
          </SimpleGrid>

          <TextInput
            label="Category"
            placeholder="Enter category"
            value={newAnnouncement.category}
            onChange={(e) => handleInputChange("category", e.target.value)}
            required
          />

          <Textarea
            label="Announcement Details"
            placeholder="What is the announcement about?"
            minRows={4}
            value={newAnnouncement.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            required
          />

          <FileInput
            label="Attach Files"
            placeholder="Upload files (PDF, JPEG, PNG, JPG)"
            accept=".pdf,.jpeg,.png,.jpg"
            multiple
            value={files}
            onChange={setFiles}
          />

          <Group position="right">
            <Button type="submit" size="md">
              Publish Announcement
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );

  const renderBrowseAnnouncements = () => (
    <Stack spacing="md">
      {announcements.length === 0 ? (
        <Text>No announcements to display</Text>
      ) : (
        announcements.map((announcement) => (
          <Card
            key={announcement.id}
            shadow="sm"
            radius="md"
            withBorder
            p="md"
            style={{
              border: "1px solid #ccc",
              borderRadius: "25px",
              padding: "20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
              borderLeft: "10px solid #1E90FF",
            }}
          >
            <Stack spacing="xs">
              <Group position="apart">
                <Badge size="lg" variant="light">
                  {announcement.category}
                </Badge>
                <Group spacing={8}>
                  {announcement.tags.map((tag, index) => (
                    <Badge key={index} size="sm" variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </Group>
              </Group>

              <Group spacing="xs" style={{ color: "#868e96" }} size="sm">
                <CalendarBlank size={16} />
                <Text>{announcement.date}</Text>
                <Text>|</Text>
                <User size={16} />
                <Text>{announcement.author}</Text>
              </Group>

              <Text lineClamp={3}>{announcement.description}</Text>

              <Group position="right">
                <Button
                  variant="subtle"
                  onClick={() => setSelectedAnnouncement(announcement)}
                >
                  Read more
                </Button>
              </Group>
            </Stack>
          </Card>
        ))
      )}
    </Stack>
  );

  return (
    <Container size="xl" p="md">
      <Stack spacing="xl">
        {/* Custom Tab Implementation */}
        <div className="w-full border-b border-gray-200 py-2">
          <div style={{ display: "flex", gap: "10px" }}>
            <CustomTab
              isActive={activeTab === "make"}
              onClick={() => setActiveTab("make")}
              icon={Bell}
              label="Make Announcement"
            />
            <CustomTab
              isActive={activeTab === "browse"}
              onClick={() => setActiveTab("browse")}
              icon={FileText}
              label="Browse Announcements"
              // className="mx-2 flex items-center space-x-2"
            />
          </div>
        </div>

        <div className="mt-6">
          {activeTab === "make" && renderMakeAnnouncement()}
          {activeTab === "browse" && renderBrowseAnnouncements()}
        </div>

        <Modal
          opened={!!selectedAnnouncement}
          onClose={() => setSelectedAnnouncement(null)}
          title={
            selectedAnnouncement && (
              <Group spacing="xs">
                <Badge size="lg">{selectedAnnouncement.category}</Badge>
                {selectedAnnouncement.tags.map((tag, index) => (
                  <Badge key={index} size="sm" variant="outline">
                    {tag}
                  </Badge>
                ))}
              </Group>
            )
          }
          size="lg"
        >
          {selectedAnnouncement && (
            <Stack spacing="md">
              <Group spacing="xs" style={{ color: "#868e96" }} size="sm">
                <CalendarBlank size={16} />
                <Text>{selectedAnnouncement.date}</Text>
                <Text>|</Text>
                <User size={16} />
                <Text>{selectedAnnouncement.author}</Text>
              </Group>
              <Text>{selectedAnnouncement.description}</Text>
            </Stack>
          )}
        </Modal>
      </Stack>
    </Container>
  );
}

export default Announcement;
