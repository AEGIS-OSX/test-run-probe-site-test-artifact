import ProjectImage from "./ProjectImage";

export default function Nav() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
        <div className="container-main flex items-center justify-between h-16">
          <ProjectImage id="logo" />
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
        </div>
      </nav>
      <div className="h-16" />
    </>
  );
}
