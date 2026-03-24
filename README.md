# 🚀 AI Content Moderation API

An AI-powered backend system that detects toxic and abusive content using Machine Learning.

---

## 🧠 Features

- Detect toxic text using AI
- Node.js backend with Express
- Python FastAPI AI service
- MongoDB Atlas integration
- REST APIs for moderation & analytics

---

## 🏗️ Architecture

Client → Node.js → FastAPI (AI) → MongoDB

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- Python (FastAPI)
- HuggingFace Transformers
- MongoDB Atlas

---

## 📌 API Endpoints

POST `/api/moderation/check`  
GET `/api/moderation/all`  
GET `/api/moderation/toxic`  
GET `/api/moderation/stats`  

---

## 🚀 Setup

### Backend
```bash
cd api-server
npm install
node server.js

cd ai-service
uvicorn main:app --reload --port 8000

---

Then run:

```bash
git add README.md
git commit -m "Added README"
git push
