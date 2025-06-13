
# 🧠 TaskPilot – AI-Powered Productivity Platform

> Your intelligent daily assistant to manage tasks, powered by a fullstack TypeScript setup.

---

## 📦 Tech Stack

### 🌐 Frontend
- ⚛️ React (TypeScript)
- 🧭 React Router DOM
- 🎨 TailwindCSS

### ⚙️ Backend
- 🖥 Node.js + Express
- 🧬 MongoDB + Mongoose
- 🌱 dotenv, cors

### 🧩 Extras
- 🔁 Nodemon for hot reload
- ⚡ Shared TypeScript interfaces
- 📦 Type-safe API calls

---

## 📁 Project Structure

```
TaskPilot/
├── client/           # Frontend (React + TypeScript)
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.tsx
│   └── index.tsx
├── server/           # Backend (Express + TypeScript)
│   ├── models/
│   ├── routes/
│   └── index.ts
├── shared/           # Shared TS interfaces
│   └── types.ts
└── README.md         # Project documentation
```

---

## 🛠️ Setup Instructions

### 🔧 Prerequisites

- Node.js 18+
- MongoDB (local or cloud)
- npm or yarn
- Git

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/shubhamh4x/TaskPilot.git
cd TaskPilot
```

---

### 📡 2. Set Up Backend

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/taskpilot
PORT=5000
```

Run backend server:

```bash
npm run dev
```

---

### 💻 3. Set Up Frontend

```bash
cd ../client
npm install
npm run dev  # OR npm start if you're using CRA
```

> App runs at: `http://localhost:5173`

---

## 🌐 API Endpoints

| Method | Route           | Description            |
|--------|------------------|------------------------|
| GET    | `/api/tasks`     | Get all tasks          |
| POST   | `/api/tasks`     | (Upcoming) Add a task  |
| PUT    | `/api/tasks/:id` | (Upcoming) Update task |
| DELETE | `/api/tasks/:id` | (Upcoming) Delete task |

---

## 📌 Features

- 🧠 AI-Themed UI
- ⚛️ Modular React Components
- 🧾 Task Listing via API
- 🧩 TypeScript end-to-end
- 🔐 Future: Auth & User Sessions
- 📊 Future: Productivity Analytics
- 🛎️ Future: Notification Reminders

---

## 💡 Scripts

### Backend

```bash
# Run with hot reload
npm run dev
```

### Frontend

```bash
# Run development mode
npm run dev
```

---

## 🧠 Developer

> Made with 💙 by Suvo (Shubham Das)

- Android Developer @ Google  
- AI Engineer | CEH | Cybersecurity Expert  
- B.Tech in AI & ML – Narula Institute of Technology  

### 🌐 Connect With Me:

- 🔗 GitHub: https://github.com/shubhamh4X
- 💼 LinkedIn: https://linkedin.com/in/shubhamh4x
- 📧 Email: shubhamhx1@gmail.com

---

## 🪪 License

This project is licensed under the **MIT License**.

---

## ✅ To-Do

- [x] Task display
- [ ] Add task via form
- [ ] User login/register with JWT
- [ ] AI suggestions based on task patterns
- [ ] Responsive dashboard with charts
- [ ] Firebase/Push notifications

---

## 📦 Deployment (optional)

To deploy:

- Frontend: Vercel / Netlify  
- Backend: Render / Railway  
- MongoDB: Atlas

Contact me for deployment steps.

---
