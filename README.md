Here’s a complete, professional `README.md` file for your **Todo Summary Assistant** GitHub repo:

---

## ✅ `README.md`

```markdown
# 📝 Todo Summary Assistant

A full-stack MERN application that allows users to:

- ✅ Create, read, update, and delete detailed to-do tasks.
- 🧠 Summarize all pending tasks using an LLM (e.g., OpenAI GPT).
- 📤 Automatically send task summaries to a Slack channel.

---

## 📂 Project Structure

```

todo-summary-assistant/
├── backend/        # Node.js + Express + MongoDB
├── frontend/       # React app (Create React App)

````

---

## 🚀 Features

- Title, description, due date, tags, and subtasks
- Priority, status, dependencies, project/category
- Slack integration via Webhook
- Real-time LLM summary generation using OpenAI (or other)
- Fully styled React frontend

---

## ⚙️ Backend Setup

### 1. Go to backend directory

```bash
cd backend
````

### 2. Create `.env` file

Create a `.env` file with the following:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo_app
OPENAI_API_KEY=your_openai_key_here
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/slack/webhook
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the backend server

```bash
npm start
```

The backend will run at: [http://localhost:5000](http://localhost:5000)

---

## 💻 Frontend Setup

### 1. Go to frontend directory

```bash
cd ../frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the React app

```bash
npm start
```

The app will run at: [http://localhost:3000](http://localhost:3000)

---

## 📦 API Endpoints

| Method | Endpoint         | Description                      |
| ------ | ---------------- | -------------------------------- |
| GET    | `/api/todos`     | Get all todos                    |
| POST   | `/api/todos`     | Create a new todo                |
| PUT    | `/api/todos/:id` | Update a specific todo           |
| DELETE | `/api/todos/:id` | Delete a todo by ID              |
| POST   | `/api/summarize` | Generate & send summary to Slack |

---

## 🧠 LLM & Slack Setup

### 🔑 OpenAI (or other LLM)

* Go to [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
* Create a new API key
* Add it to your `.env` as `OPENAI_API_KEY`

### 📤 Slack Webhook

* Go to [https://api.slack.com/messaging/webhooks](https://api.slack.com/messaging/webhooks)
* Create a new incoming webhook for your Slack channel
* Add it to `.env` as `SLACK_WEBHOOK_URL`

---

## 🛠 Tech Stack

* **Frontend**: React (CRA)
* **Backend**: Node.js + Express
* **Database**: MongoDB
* **LLM**: OpenAI GPT-3.5 / GPT-4 (or others)
* **Messaging**: Slack Webhooks

---

## 📸 Screenshots

> You can upload screenshots of your app here (UI, task form, Slack messages, etc.)

---

## 🧑‍💻 Author

Made by [@dhiraj7kr](https://github.com/dhiraj7kr)

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).


