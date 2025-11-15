# 📘 Bookmark Manager — React + TailwindCSS

A simple, elegant, and fully functional **Bookmark Manager Application** built using **React (Vite)** and **TailwindCSS**.  
This project converts a provided HTML template into a React-based, component-driven architecture while implementing form handling, validation, search, filtering, sorting, password reveal toggle, and dynamic greeting features.

---

## 🚀 Live Demo
*(Add your deployed link here)*

---

## 🖼️ Screenshots
*(Add screenshots here)*  
Example:  
```
![App Screenshot](./screenshots/home.png)
```

---

## ✨ Features Overview

### 🔹 1. Dynamic Greeting
- Displays greeting based on time:  
  - Morning → “Good Morning”  
  - Noon → “Good Noon”  
  - Evening → “Good Evening”
- Shows date in **Day, Mon DD** format (e.g., Monday, Nov 10).

---

### 🔹 2. New Bookmark Form
- Add bookmarks with:
  - Website URL
  - Category
  - Username
  - Password
- **Full validation includes:**
  - Required fields  
  - Valid URL  
  - Password ≥ 6 characters  
- **Field-level error messages**
- **Clear button** resets the form
- Auto-generates **Website Name** from the URL

---

### 🔹 3. Bookmark Cards (Grid View)
- Responsive grid view of bookmarks
- Each card shows:
  - Name  
  - URL  
  - Category  
  - Username  
  - Password (masked)
- Custom icon:
  - Based on first **two domain characters**
  - Uses selected category color
- Password reveal/hide toggle

---

### 🔹 4. Search Functionality
- Real-time search matching:
  - Name  
  - URL
- Empty search → show all bookmarks
- No result → shows a themed **“Not Found”** message

---

### 🔹 5. Sorting Feature
- Sort bookmarks by:
  - **Name (ASC / DESC)**
  - **Date (ASC / DESC)**
- Interactive "Sort By" dropdown UI

---

### 🔹 6. Component-Based Architecture
- Organized by features:
  - Form  
  - Grid  
  - Card  
  - Search  
  - Sorting  
  - Utilities  
- Clean, logical structure  
- No third-party UI/utility libraries  
- No unnecessary design changes  

---

## 🛠️ Tech Stack
- **React (Vite)**
- **TailwindCSS**
- **JavaScript (ES6)**
- **Local State (useState / useEffect)**

---

## 📦 Installation & Setup

### 1️⃣ Create Vite Project
```bash
npm create vite@latest
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Install TailwindCSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4️⃣ Start Dev Server
```bash
npm run dev
```

---

## 📁 Recommended Folder Structure
```
src/
│── components/
│   ├── Greeting.jsx
│   ├── SearchBar.jsx
│   ├── SortMenu.jsx
│   ├── BookmarkForm.jsx
│   ├── BookmarkCard.jsx
│   └── BookmarkGrid.jsx
│
│── utils/
│   ├── validate.js
│   ├── extractName.js
│   ├── sort.js
│   └── time.js
│
│── App.jsx
│── main.jsx
│── index.css
```

---

## 🧠 Key Logics

### 🔹 URL → Name Extraction
Automatically converts URL domain into a user-friendly name.

### 🔹 Custom Sorting
Pure JavaScript sorting — no libraries used.

### 🔹 Password Reveal Toggle
Toggles visibility between `"password"` and `"text"`.

---

## 📄 Assignment Requirements (Completed)
✔ Vite + React project created  
✔ TailwindCSS installed  
✔ HTML converted to React  
✔ Dynamic greeting + formatted date  
✔ Form with full validation  
✔ Bookmark creation  
✔ Auto name from URL  
✔ Password reveal toggle  
✔ Search feature  
✔ “Not Found” message  
✔ Sorting (Name/Date, Asc/Desc)  
✔ Clear button resets form  
✔ Organized components  
✔ No external libraries  
✔ Professional README  

---

## 👨‍💻 Author
**Your Name**  
Email: your.email@example.com  
GitHub: your-github-profile


