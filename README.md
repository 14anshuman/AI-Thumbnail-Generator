## 🎨 AI Thumbnail Generator

An AI-powered full-stack application that helps creators generate high-quality, customizable YouTube thumbnails using generative AI 🤖.
Users can define prompts, visual styles, aspect ratios, and color schemes, and the system automatically produces visually optimized thumbnails 🚀.
---

## 🚀 Features

✔️ User authentication with session cookies  
✔ Generate thumbnails via AI prompts  
✔ Select style, aspect ratio, color scheme, and more  
✔ Cloudinary image hosting  
✔ Thumbnail history per user  
✔ REST API backend + React frontend

---

## 🧠 Tech Stack

| Layer | Technology |
|------|-------------|
| Frontend | React (Vite), Axios |
| Backend | Node.js, Express, TypeScript |
| Database | MongoDB (Mongoose) |
| AI | Gemini/OpenAI prompt + image generation |
| Storage | Cloudinary |
| Auth | Session-based with cookies |

---

## 📦 Installation

### 1️⃣ Clone

```bash
git clone https://github.com/14anshuman/AI-Thumbnail-Generator.git
cd AI-Thumbnail-Generator
```
🏗️ Backend Setup

2️⃣ Install dependencies
```
cd backend
npm install
```

3️⃣ Environment Variables

Create .env:
```
PORT=8000
MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
GEMINI_API_KEY=your_generative_api_key
```
4️⃣ Start Backend
```
npm run dev
By default, API runs at http://localhost:8000/api.
```

🖼️ Frontend Setup
5️⃣ Install dependencies
```
cd frontend
npm install
```
6️⃣ Environment Variables
Create .env:
```

VITE_BACKEND_URL=http://localhost:8000/api
```
7️⃣ Start Frontend
```
npm run dev

Frontend runs at something like http://localhost:5173.
```

🔑 Authentication
Users can register and login. Once authenticated, users can generate and view their thumbnails.

Session cookies are stored via withCredentials in Axios.


📁 Project Structure
```
AI-Thumbnail-Generator/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   └── server.ts
│
├── frontend/
|   |── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
|   |   |── context/
│   │   ├── config/
|   |   |── sections/
│   │   ├── api/
│   │   └── App.jsx
|   |   └── main.jsx
|   |── index.html
|   |── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── package.json
```
