# User Management System - MERN Stack

A full-stack User Management System built using the MERN stack.

The application allows users to create, view, update, delete, and search user records through a React frontend connected to a Node.js and Express.js REST API with MongoDB as the database.

---

## 🚀 Features

- Create a new user
- View all users
- View user details by ID
- Update user information
- Delete users
- Search users by:
  - Name
  - Email
  - Role
  - Department
- Active/Inactive user status
- Form validation
- Duplicate email validation
- Invalid MongoDB ID validation
- Responsive and professional UI
- RESTful API
- MongoDB database integration
- Postman API testing

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Axios
- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js
- Mongoose
- CORS
- dotenv

### Database

- MongoDB

### Tools

- Visual Studio Code
- Postman
- Git
- GitHub
- MongoDB Compass

---

## 📁 Project Structure

```text
user-management-mern/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── userController.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── userRoutes.js
│   │
│   ├── middleware/
│   │
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserForm.jsx
│   │   │   └── UserList.jsx
│   │   │
│   │   ├── services/
│   │   │   └── userService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── .gitignore
└── README.md