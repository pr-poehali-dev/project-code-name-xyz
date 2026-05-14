interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">❤️ для тебя</div>
        <nav className="flex gap-8">
          <a
            href="#love"
            className="text-white hover:text-pink-300 transition-colors duration-300 uppercase text-sm"
          >
            Любовь
          </a>
          <a
            href="#heart"
            className="text-white hover:text-pink-300 transition-colors duration-300 uppercase text-sm"
          >
            Навсегда
          </a>
        </nav>
      </div>
    </header>
  );
}