# 📌 React Calculator

A simple and responsive calculator application built using **React** and **Vite**.  
This project demonstrates component-based architecture, state management using hooks, and dynamic UI rendering.

---

## 🚀 Features

- Basic arithmetic operations (+, −, ×, ÷)
- Clear (C) and Delete (DEL) functionality
- Dynamic button rendering using `.map()`
- Responsive UI design
- Built using React functional components and hooks

---

## 🛠 Tech Stack

- React
- Vite
- JavaScript (ES6)
- CSS

---

## 📂 Project Structure

    calculator-react/
    │
    ├── index.html
    ├── package.json
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │
    └── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

    git clone <your-repository-url>
    cd calculator-react

### 2️⃣ Install Dependencies

    npm install

### 3️⃣ Run Development Server

    npm run dev

Open your browser and visit:

    http://localhost:5173

---

## 🧠 How It Works

- The `useState` hook manages the calculator input.
- Button clicks update the state dynamically.
- JavaScript's `eval()` function computes the result.
- Error handling displays `"Error"` for invalid expressions.

---

## ⚠️ Important Note

This project uses JavaScript's `eval()` for calculation logic.  
While suitable for learning and demo purposes, `eval()` is not recommended for production applications due to security concerns.

---
