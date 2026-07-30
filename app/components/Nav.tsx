"use client";

import { ProjectImage } from "./ProjectImage";

export default function Nav() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
      <div className="flex items-center justify-between py-6 px-8 max-w-[1200px] mx-auto">
        <a href="/" className="flex items-center">
          <ProjectImage id="logo" className="h-8 w-auto" />
        </a>
        <a
          href="#contact"
          onClick={handleContactClick}
          className="btn-primary"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
