export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold tracking-tight">ChatGuard AI</div>
        <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
          <a href="#features">Features</a>
          <a href="#models">Models</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}
