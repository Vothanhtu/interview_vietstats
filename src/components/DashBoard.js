import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../css/Dashboard.css";
export default function DashBoard() {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  ];
  return (
    <div className="dashboard-container">
      <div className="header">
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
        <div className="user-info">
          <div classNameName="language-selector">
            <i classNameName="fas fa-globe"></i>
            <select>
              <option>EN</option>
              <option>한국어</option>
              <option>VN</option>
            </select>
          </div>
          <img
            alt="User profile picture"
            height="40"
            src="./img/bannerImage.svg"
            width="40"
          />
          <i classNameName="fas fa-bell"></i>
          <span>User ID</span>
        </div>
      </div>
      <hr className="devider"></hr>
      <div className="main-container__content">
        <div className="sidebar">
          <a className="active" href="#">
            <i className="fas fa-tachometer-alt"></i>
            Dashboard
          </a>
          <a href="#">
            <i className="fas fa-calendar-alt"></i>
            Calendar
          </a>
          <a href="#">
            <i className="fas fa-book"></i>
            Course Management
          </a>
          <a href="#">
            <i className="fas fa-chalkboard-teacher"></i>
            className Management
          </a>
          <a href="#">
            <i className="fas fa-user-tie"></i>
            Tutor Management
          </a>
          <a href="#">
            <i className="fas fa-user-graduate"></i>
            Student Management
          </a>
          <a href="#">
            <i className="fas fa-file-invoice-dollar"></i>
            Bill Management
          </a>
          <a href="#">
            <i className="fas fa-cog"></i>
            Settings
          </a>
        </div>

        <div className="main-content">
          <div className="welcome-banner">
            <img
              alt="Illustration of a person managing tasks"
              height="150"
              src="./img/bannerImage.svg"
              width="150"
            />
            <div>
              <h1>Hello, USER ID</h1>
              <p>Manage your activities in this dashboard</p>
            </div>
            <div></div>
          </div>
          <div className="stats">
            <div className="stat-card">
              <i className="fas fa-book"></i>
              <h2>254</h2>
              <p>classNamees</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-user-tie"></i>
              <h2>647</h2>
              <p>Tutor</p>
            </div>
            <div className="stat-card highlight">
              <i className="fas fa-user-graduate"></i>
              <h2>834</h2>
              <p>Student</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-dollar-sign"></i>
              <h2>$834</h2>
              <p>Total Revenue</p>
            </div>
          </div>
          {/* Phần này em không có data cụ thể để làm chart nên em đã tự làm khác với design ban đầu */}
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
            {data.map((entry, index) => (
              <Area
                key={index}
                type="monotone"
                data={[
                  { x: index, y: entry.uv - 50 },
                  { x: index + 0.2, y: entry.uv + 20 },
                  { x: index + 0.4, y: entry.uv - 10 },
                  { x: index + 0.6, y: entry.uv + 30 },
                  { x: index + 0.8, y: entry.uv },
                ]}
                stroke="#8884d8"
                fill="#8884d8"
                dot={false}
              />
            ))}
          </BarChart>
        </div>
        <div className="calendar">
          <div className="calendar-container">
            <div className="flex justify-between items-center mb-4">
              <i className="fas fa-chevron-left"></i>
              <span className="text-lg font-semibold">February, 2023</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mt-2">
              {[...Array(31)].map((_, i) => (
                <div
                  key={i}
                  className={`day ${i === 15 ? "selected" : ""} ${
                    i === 15 ? "today" : ""
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="schedule-container mt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Today, 16 February</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              {["14 Mon", "15 Tue", "16 Wed", "17 Thu", "18 Fri"].map(
                (day, index) => (
                  <div
                    key={index}
                    className={`day-schedule ${index === 2 ? "selected" : ""}`}
                  >
                    {day}
                  </div>
                )
              )}
            </div>
            <div className="text-sm text-gray-500 mb-2">08 am</div>
            <div className="event blue">
              <i className="fas fa-video mr-2"></i>
              <div>
                <div>Subject 1</div>
                <div className="text-xs">Tutor ID</div>
                <div className="text-xs">Student ID</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-2">10:30 am</div>
            <div className="event red">
              <i className="fas fa-video mr-2"></i>
              <div>
                <div>Subject 1</div>
                <div className="text-xs">Tutor ID</div>
                <div className="text-xs">Student ID</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-2">02:00 pm</div>
            <div className="event green">
              <i className="fas fa-video mr-2"></i>
              <div>
                <div>Subject 1</div>
                <div className="text-xs">Tutor ID</div>
                <div className="text-xs">Student ID</div>
              </div>
            </div>
            <div className="event gray">
              <i className="fas fa-video mr-2"></i>
              <div>
                <div>Subject 1</div>
                <div className="text-xs">Tutor ID</div>
                <div className="text-xs">Student ID</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
