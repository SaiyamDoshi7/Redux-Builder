# 🚀 Smart Leave Management System

## 📌 Project Overview

The Smart Leave Management System is a modern dashboard-based web application built using React.js, Redux Toolkit, and Redux Thunk for efficient leave record management.

This application allows users to apply for leave, track leave history, approve or reject leave requests, delete records, and filter leave data in real time using centralized state management.

All leave operations are handled asynchronously and stored locally using browser localStorage, making the system lightweight and fully functional without requiring any backend API.

---

## 🎯 Project Objectives

- To understand centralized state management using Redux Toolkit
- To implement asynchronous logic using Redux Thunk
- To develop a real-world CRUD dashboard application
- To handle real-time UI updates without page refresh
- To simulate an industry-level leave management workflow

---

## 🛠 Tech Stack

- Frontend: React.js (Vite)
- State Management: Redux Toolkit
- Middleware: Redux Thunk
- Styling: Bootstrap
- Data Storage: Browser localStorage

---

## ✨ Features

### ✅ Apply Leave

Users can submit different types of leave requests:

- Sick Leave
- Casual Leave
- Emergency Leave
- Vacation Leave
- Half-Day Leave

Each leave request stores:

- Employee Name  
- Leave Type  
- Start Date  
- End Date  
- Reason  
- Status  
- Applied Date  

---

### ✅ View Leave Records

All leave requests are displayed in a structured table dashboard showing:

- Employee Name
- Leave Type
- Leave Duration
- Leave Status
- Action Controls

---

### ✅ Leave Status Management

Leave status can be updated as:

- Pending
- Approved
- Rejected

Status is visually represented using Bootstrap badges for better UX.

---

### ✅ Delete Leave Request

Users can remove cancelled or unnecessary leave entries.  
Redux updates the UI instantly after deletion.

---

### ✅ Search & Filter System

Users can:

- Search leave records by employee name
- Filter leave records by status

This helps in quick record management.

---

### ✅ Real-Time UI Sync

Whenever a leave request is:

- Added
- Updated
- Approved / Rejected
- Deleted

Redux automatically updates the UI without requiring manual refresh.

---

### ✅ Automatic Leave Duration Calculation

The system calculates leave duration automatically based on selected start and end dates.

---

### ✅ Loading State Handling

Redux Thunk asynchronous operations display loading indicators to improve user experience.

---
