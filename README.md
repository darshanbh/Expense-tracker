# FinTrack – Personal Finance Manager

## Live Demo

https://fintrack-system.netlify.app/

---

# Overview

FinTrack is a full-stack MERN application developed to help users manage personal finances efficiently. The application allows users to securely register, log in, add income and expense transactions, track financial history, and monitor overall balance.

The project is built using the MERN stack:

- MongoDB
- Express.js
- React.js
- Node.js

---

# Features

## User Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Hashing using bcryptjs

---

## Transaction Management

Users can:

- Add Income Transactions
- Add Expense Transactions

Each transaction includes:

- Amount
- Type
- Description
- Date

---

## Financial Summary

The application automatically calculates:

- Total Income
- Total Expense
- Current Balance

Formula:

Balance = Income - Expense

---

## Transaction History

Users can:

- View all transactions
- View recent transactions on dashboard

Displayed Information:

- Date
- Type
- Amount
- Description

---

# Security Features

- JWT Authentication
- Protected APIs
- Password Hashing
- User-specific transaction mapping
- Environment Variables using dotenv

---

# Database Design

## Users Collection

Stores:

- Name
- Email
- Password

## Transactions Collection

Stores:

- Amount
- Type
- Description
- Date
- User ID Reference

Each transaction is mapped to the authenticated user using MongoDB ObjectId.

---

# Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Axios
- React Router DOM
- Vite

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- CORS

---

# Deployment

## Frontend Hosting

- Netlify

## Backend Hosting

- Render

## Database

- MongoDB Atlas

---

# API Endpoints

## Authentication APIs

### Register User

POST /api/auth/register

### Login User

POST /api/auth/login

---

## Transaction APIs

### Add Transaction

POST /api/transactions/add

### Get All Transactions

GET /api/transactions

### Get Financial Summary

GET /api/transactions/summary

---

# UI Features

- Modern Responsive UI
- Olive Green Theme
- Professional Navbar
- Dashboard Page
- Transactions Page
- Financial Summary Cards
- Logout Functionality
- Responsive Layout

---

# Project Structure

```bash
Expense-tracker/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── README.md