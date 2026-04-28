# 📄 CV Builder (React)

A simple CV/résumé builder built with React. Users can input their personal details, education, and work experience, and instantly preview a formatted CV.

---

## 🚀 Features

- Add and edit **General Information** (name, email, phone)
- Add multiple **Education** entries
- Add multiple **Experience** entries
- Toggle between **edit** and **preview** modes
- **Live preview** updates as you type
- **Persistent data** using localStorage
- Clean **CV-style layout** with sidebar + content

---

## 🧠 Concepts Learned

This project focuses on core React fundamentals:

- **useState** → managing form data and lists
- **useEffect** → saving data to localStorage
- **Controlled components** → inputs driven by state
- **Props** → passing data between components
- **Dynamic rendering** → rendering lists with `.map()`
- **Conditional rendering** → edit vs preview modes
- **Immutability** → updating arrays/objects safely

---

## 🎨 UI Overview

- Left side: Form inputs (edit mode)
- Right side: Live CV preview
- Sidebar-style CV layout:
  - Left: personal info
  - Right: education + experience

---

## 💾 Data Persistence

Data is saved automatically using `localStorage`.

- On load → data is retrieved
- On change → data is saved via `useEffect`

---

## ⚠️ Known Limitations / Improvements

Here are areas that can be improved:

### 🔹 1. Better Validation

- Currently uses `alert()` for validation
- Improve by:
  - Showing inline error messages
  - Highlighting invalid inputs (red borders)

---

### 🔹 2. Better Form UX

- Add:
  - Placeholder hints
  - Required field indicators (\*)
  - Input grouping

---

### 🔹 3. Delete Confirmation

- Prevent accidental deletes:
  - Add confirmation modal instead of instant delete

---

### 🔹 4. Better State Structure

- Consider:
  - Splitting each entry into its own component
  - Lifting state more cleanly
  - Using `useReducer` for complex state

---

### 🔹 5. Styling Improvements

- Add:
  - Animations (add/remove entries)
  - Hover states
  - Better spacing and typography

---

### 🔹 6. Print / Export Feature

- Allow users to:
  - Download CV as PDF
  - Print-friendly styling

---

### 🔹 7. Image Upload

- Add profile picture support

---

### 🔹 8. Responsive Design

- Improve mobile layout:
  - Stack form and preview vertically

---

### 🔹 9. Accessibility

- Add:
  - Proper labels
  - ARIA attributes
  - Keyboard navigation

---

## 🛠️ Future Enhancements

- Drag & drop reordering of sections
- Multiple CV templates/themes
- Backend storage (save CV online)
- Authentication (user accounts)

---

## 🧪 Lessons Learned

- State should be **immutable**
- React re-renders based on **state changes**
- `useEffect` is for **side effects**, not general logic
- Controlled inputs give full control over user data
- Good UI structure improves UX significantly

---

## 📌 Conclusion

This project helped solidify core React concepts while introducing real-world patterns like dynamic forms, state management, and UI structuring.

---

## 🌐 Live Demo (optional)

_Add your deployed link here_

---

## 📂 Repository

_Add your GitHub repo link here_

---
