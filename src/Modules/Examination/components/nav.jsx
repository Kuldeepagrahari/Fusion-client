import React from "react";
import { NavLink } from "react-router-dom";
import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";

export default function Nav() {
  const activeLinkStyle = {
    fontWeight: "bold",
    borderBottom: "3px solid black",
    paddingBottom: "0.25rem",
  };

  const defaultLinkStyle = {
    textDecoration: "none",
    padding: "0px 10px",
    color: "black",
    display: "inline-block",
  };

  const linkWrapperStyle = {
    display: "flex",
    alignItems: "center",
    borderRight: "2px solid black",
    padding: "0 15px",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "5vh",
        marginBottom: "30px",
      }}
    >
      <CaretCircleLeft size={25} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={linkWrapperStyle}>
          <NavLink
            to="/examination/submit-grades"
            className="borderclass"
            style={({ isActive }) =>
              isActive
                ? { ...defaultLinkStyle, ...activeLinkStyle }
                : defaultLinkStyle
            }
          >
            Submit Grades
          </NavLink>
        </div>
        <div style={linkWrapperStyle}>
          <NavLink
            to="/examination/verify-grades"
            className="borderclass"
            style={({ isActive }) =>
              isActive
                ? { ...defaultLinkStyle, ...activeLinkStyle }
                : defaultLinkStyle
            }
          >
            Verify Grades
          </NavLink>
        </div>
        <div style={linkWrapperStyle}>
          <NavLink
            to="/examination/announcement"
            className="borderclass"
            style={({ isActive }) =>
              isActive
                ? { ...defaultLinkStyle, ...activeLinkStyle }
                : defaultLinkStyle
            }
          >
            Announcement
          </NavLink>
        </div>
        <div style={{ padding: "0 15px" }}>
          <NavLink
            to="/examination/generate-transcript"
            style={({ isActive }) =>
              isActive
                ? { ...defaultLinkStyle, ...activeLinkStyle }
                : defaultLinkStyle
            }
          >
            Generate Transcript
          </NavLink>
        </div>
      </div>
      <CaretCircleRight size={25} />
    </div>
  );
}
