# 🛡️ Smart Cyber Safety Analyzer

A full-stack web application designed to report, track, and analyze cyber fraud incidents. Users can submit fraud reports, view all reported cases, and gain insights through interactive charts and data visualization.

---

## 🚀 Live Demo

🔗 [https://cyber-safety-analyzer.onrender.com](https://cyber-safety-analyzer.onrender.com)

---

## ✨ Features

- 📝 **Report Fraud** — Submit cyber fraud incidents with categorized fraud types
- 📊 **View Reports** — View all reported cases in a clean card layout
- 🔍 **Search & Filter** — Real-time search and filter by fraud type
- 📈 **Data Visualization** — Interactive doughnut chart showing fraud type distribution
- 💾 **Persistent Storage** — All reports saved in SQLite database
- 🌐 **Cross-Browser** — Works on Safari, Chrome, and all modern browsers

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | SQLite |
| Charts | Chart.js |
| Deployment | Render |
| Version Control | Git & GitHub |

---

## 📁 Project Structure

```
CYBER-FRAUD/
├── backend/
│   ├── server.js        
│   ├── database.db      
│   └── package.json     
└── frontend/
    ├── index.html       
    ├── report.html      
    ├── view.html        
    ├── script.js        
    └── style.css        
```

---

## ⚙️ How to Run Locally

**1. Clone the repository**
```
git clone https://github.com/kaustubh8857/CYBER-SAFETY-ANALYZER.git
cd CYBER-SAFETY-ANALYZER
```

**2. Install dependencies**
```
cd backend
npm install
```

**3. Start the server**
```
node server.js
```

**4. Open in browser**
```
http://localhost:3000
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Check server status |
| POST | `/api/report` | Submit a new fraud report |
| GET | `/api/reports` | Fetch all fraud reports |

---

## 🙋 Author

**Kaustubh Chaturvedi**
- GitHub: [@kaustubh8857](https://github.com/kaustubh8857)

---

## 📄 License

MIT License
