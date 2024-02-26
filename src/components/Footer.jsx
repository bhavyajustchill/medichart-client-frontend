import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved |
          Imbuesoft LLP
        </p>
      </aside>
    </footer>
  );
}
