import React from "react";
import { NavLink } from "react-router-dom";
import { Group, Text, Box } from "@mantine/core";
import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";

const links = [
  { path: "/examination/submit-grades", label: "Submit Grades" },
  { path: "/examination/verify-grades", label: "Verify Grades" },
  { path: "/examination/announcement", label: "Announcement" },
  { path: "/examination/generate-transcript", label: "Generate Transcript" },
  { path: "/examination/seating-plan", label: "Seating Plan" },
];

export default function Nav() {
  const activeLinkStyle = {
    fontWeight: "bold",
    borderBottom: "2px solid black",
    paddingBottom: "0.25rem",
  };

  const defaultLinkStyle = {
    textDecoration: "none",
    padding: "0.55rem 1rem",
    color: "black",
    display: "inline-block",
  };

  return (
    <Box component="nav" p="md">
      <CaretCircleLeft size={32} />
      <Group
        spacing="md"
        position="left"
        align="flex-start"
        sx={{ flexWrap: "wrap" }}
      >
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            style={({ isActive }) =>
              isActive
                ? { ...defaultLinkStyle, ...activeLinkStyle }
                : defaultLinkStyle
            }
          >
            <Text size="md">{link.label}</Text>
          </NavLink>
        ))}
      </Group>
      <CaretCircleRight size={32} />
    </Box>
  );
}
