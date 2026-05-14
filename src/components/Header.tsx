import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
        <div className="flex justify-between items-center">
          <div className="text-white text-sm uppercase tracking-wide">❤️ для тебя</div>
          <nav className="flex gap-8">
            <button
              onClick={() => setOpen(true)}
              className="text-white hover:text-pink-300 transition-colors duration-300 uppercase text-sm cursor-pointer bg-transparent border-none"
            >
              Любовь
            </button>
            <a
              href="#heart"
              className="text-white hover:text-pink-300 transition-colors duration-300 uppercase text-sm"
            >
              Навсегда
            </a>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full mx-4 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://cdn.poehali.dev/projects/e2777924-1b7f-4818-bd63-b7e6c541a958/bucket/30f9b9c0-fa86-4d8a-8b78-3ded45ad7cba.jpg"
                alt="Любовь"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-6 text-white text-center">
                <p className="text-lg font-bold mb-2">Любовь ❤️</p>
                <p className="text-sm opacity-90 leading-relaxed">Здесь мы с тобой были как никогда близки к созданию отношений, я очень рад, что всё так сложилось</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
