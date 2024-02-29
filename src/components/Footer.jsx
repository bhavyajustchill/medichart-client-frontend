import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer footer-center  bg-neutral text-neutral-content">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved |
          Imbuesoft LLP
        </p>
      </aside>
    </footer>

  );
}
