export default function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-center bg-[var(--color-canvas)] shadow-sm"
    >
      <div className="container-page flex items-center justify-between w-full">
        <span className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-[var(--color-text)]">
          Acme Walkies
        </span>
        <a
          href="#contact"
          className="text-[var(--color-accent)] text-sm font-medium no-underline hover:opacity-80 transition-opacity duration-200 ease-out"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
