# 📿 ZIKRMATE — Your Digital Tasbih Companion

**ZikrMate** is a clean and peaceful digital counter application designed to help users track their daily Zikr (remembrance). It focuses on simplicity, offering a focused environment for spiritual reflection with modern web features.

---

## ✨ Key Features

* **Multiple Zikr Counters:** Track four specific Zikrs individually: *Subhan Allah, Alhamdulillah, Allahu Akbar,* and *Astaghfirullah*.
* **Smart Local Storage:** Your counts and progress are automatically saved to your browser. Even if you refresh the page, your data stays safe.
* **Dual Mood Themes:** Features a "Green Mood" and a "Red Mood" toggle. Change the entire look of the app to suit your preference with a smooth transition.
* **Interactive Animations:** Beautiful "Bubble" tap effects and pulse animations on the counter to make the experience feel tactile and engaging.
* **Intelligent Selection:** The app remembers which Zikr you were reciting last and restores it automatically when you return.
* **One-Click Reset:** Easily reset a specific counter or use the "Reset All" feature to clear all your data at once.
* **Fully Responsive:** Designed with **Tailwind CSS** to look perfect on small mobile screens, tablets, and desktops.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5 & Vanilla JavaScript
* **Styling:** Tailwind CSS (v4)
* **Icons:** Font Awesome
* **Storage:** Browser LocalStorage API
* **Fonts:** Poppins (for a modern, clean look)

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Mahnoor-F/Zikr-Mate.git](https://github.com/Mahnoor-F/Zikr-Mate.git)
    cd Zikr-Mate
    ```

2.  **Styles Setup:**
    The project uses Tailwind CSS. You can run the compiler or simply open the file if using the pre-compiled version:
    ```bash
    npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
    ```

3.  **Launch Project:**
    Simply open the `index.html` file in any modern web browser.

---

## 📂 Project Structure

* `index.html`: The main structure featuring the Tasbih interface and Zikr selection.
* `script.js`: The core logic handling the counters, theme switching, and local storage.
* `style.css`: Custom bubble animations and theme-based color variables.
* `input.css`: Tailwind configuration and global font settings.

---

## 👤 Author

* **Created by:** Mahnoor
* **GitHub:** [https://github.com/Mahnoor-F](https://github.com/Mahnoor-F)
