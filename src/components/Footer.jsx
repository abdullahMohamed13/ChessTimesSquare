import React from "react";
import '../css/footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; 2025 — <span>chessTimesSquare</span> — Built by Abdallah Aziz 
      </p>
      <div className="donation-section">
            <a
                href="https://www.palestinercs.org/en/Donation"
                target='_blank'>
                Donate To The Palestine Red Crescent Society & Help The Children Of Palestine
            </a>
        </div>
    </footer>
  );
}
