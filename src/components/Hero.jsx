import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Hero() {
  const numberOfDates = 15;

  return (
    <div style={{ flex: 1, padding: "1rem" }}>
      <h1>Burger Singh Television Advertisement</h1>
      <span>Created On: 10 October 2021</span> <br />
      <span>Project Created by: Jane Doe</span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>10 October 2021</h1>

        <button
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            backgroundColor: "#1e3799",
            color: "#fff",
            border: "none",
          }}
        >
          Add Time Card
        </button>

        <button
          style={{
            marginLeft: "5rem",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            backgroundColor: "#f39c12",
            color: "##ecb232",
            border: "none",
          }}
        >
          Filters
        </button>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <div style={{ marginRight: "5rem" }}>
          <span></span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              style={{
                marginRight: "1rem",
                backgroundColor: "#f2f2f2",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
              }}
            >
              {getMonthName(index)}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {Array.from({ length: numberOfDates }, (_, index) => (
          <div
            key={index}
            style={{ marginRight: "4rem", backgroundColor: "#f2f2f2" }}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {Array.from({ length: numberOfDates }, (_, index) => (
          <div
            key={index}
            style={{ marginRight: "2.75rem", backgroundColor: "#f2f2f2" }}
          >
            {getDayName(index)}
          </div>
        ))}
      </div>
      <div
        style={{
          width: "78rem",
          backgroundColor: "#1af688",
          padding: "0.5rem",
          borderRadius: "1.5rem",
          marginTop: "1rem",
        }}
      >
        <p style={{ margin: "0 0 10px 0" }}>
          <span style={{ marginRight: "2rem" }}>John Doe </span>Check-in Time:{" "}
          <span style={{ marginLeft: ".6rem" }}>7:00 </span>
          <FaExternalLinkAlt />{" "}
          <span style={{ marginLeft: ".6rem" }}>
            Check-Out Time: 7:00 <FaExternalLinkAlt />
          </span>
        </p>
      </div>
      <br />
      <div
        style={{
          width: "45.75rem",
          backgroundColor: "#1af688",
          padding: "0.5rem",
          borderRadius: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <p style={{ margin: "0 0 10px 0" }}>
          <span style={{ marginRight: "2rem" }}>John Doe </span>Check-in Time:{" "}
          <span style={{ marginLeft: ".6rem" }}>7:00 </span>
          <FaExternalLinkAlt />{" "}
          <span style={{ marginLeft: ".6rem" }}>
            Check-Out Time: 7:00 <FaExternalLinkAlt />
          </span>
        </p>
      </div>
      <div
        style={{
          width: "45.75rem",
          backgroundColor: "#7c1af6",
          padding: "0.5rem",
          borderRadius: "1.5rem",
          marginBottom: "1rem",
          marginLeft: "6rem",
        }}
      >
        <p style={{ margin: "0 0 10px 0" }}>
          <span style={{ marginRight: "2rem" }}>John Doe </span>Check-in Time:{" "}
          <span style={{ marginLeft: ".6rem" }}>7:00 </span>
          <FaExternalLinkAlt />{" "}
          <span style={{ marginLeft: ".6rem" }}>
            Check-Out Time: 7:00 <FaExternalLinkAlt />
          </span>
        </p>
      </div>
      <div
        style={{
          width: "65.75rem",
          backgroundColor: "#1ad8f6",
          padding: "0.5rem",
          borderRadius: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <p style={{ margin: "0 0 10px 0" }}>
          <span style={{ marginRight: "2rem" }}>John Doe </span>Check-in Time:{" "}
          <span style={{ marginLeft: ".6rem" }}>7:00 </span>
          <FaExternalLinkAlt />{" "}
          <span style={{ marginLeft: ".6rem" }}>
            Check-Out Time: 7:00 <FaExternalLinkAlt />
          </span>
        </p>
      </div>
      <div
        style={{
          width: "72rem",
          backgroundColor: "#f6811a",
          padding: "0.5rem",
          borderRadius: "1.5rem",
          marginBottom: "1rem",
          marginLeft: "6rem",
        }}
      >
        <p style={{ margin: "0 0 10px 0" }}>
          <span style={{ marginRight: "2rem" }}>John Doe </span>Check-in Time:{" "}
          <span style={{ marginLeft: ".6rem" }}>7:00 </span>
          <FaExternalLinkAlt />{" "}
          <span style={{ marginLeft: ".6rem" }}>
            Check-Out Time: 7:00 <FaExternalLinkAlt />
          </span>
        </p>
      </div>
    </div>
  );
}

function getMonthName(index) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[index];
}

function getDayName(index) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[index % 7]; // Use modulo to repeat days after each week
}

export default Hero;
