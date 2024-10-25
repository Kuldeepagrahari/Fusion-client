import { NavLink } from "react-router-dom";
import { Group, Text } from "@mantine/core";
import "../styles/nav.css";

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
    paddingBottom: "0.25rem", // Add some space between the text and border-bottom
  };

  const defaultLinkStyle = {
    textDecoration: "none",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    lineHeight: "1",
    display: "inline-block", // Ensure the border height matches the text
    color: "black",
  };

  const borderLeftStyle = {
    paddingLeft: "1rem",
    height: "100%",
  };

  return (
    <div
      style={{
        marginLeft: "5vw",
        display: "flex",
        padding: "1rem",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Group direction="row" spacing="md" style={{ flexGrow: 1 }}>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            style={({ isActive }) =>
              isActive
                ? { ...defaultLinkStyle, ...activeLinkStyle }
                : defaultLinkStyle
            }
            aria-label={link.label} // Accessibility improvement
          >
            <Text size="md" style={borderLeftStyle}>
              {link.label}
            </Text>
          </NavLink>
        ))}
      </Group>
    </div>
  );
}
