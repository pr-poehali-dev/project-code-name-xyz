import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [openTogether, setOpenTogether] = useState(false);
  const [openLove, setOpenLove] = useState(false);
  const [openMemories, setOpenMemories] = useState(false);
  const [openDreams, setOpenDreams] = useState(false);
  const [openForever, setOpenForever] = useState(false);

  const [visited, setVisited] = useState({ heart: false, love: false, memories: false, dreams: false, together: false });
  const allVisited = Object.values(visited).every(Boolean);

  const visit = (key: keyof typeof visited) => setVisited((v) => ({ ...v, [key]: true }));

  return (
    <>
      <div
        className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
          <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
            <div className="bg-rose-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
              <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Чувства</h3>
                  <button
                    onClick={() => { setOpenLove(true); visit("love"); }}
                    className="text-white hover:text-pink-300 transition-colors duration-300 text-sm sm:text-base text-left bg-transparent border-none cursor-pointer p-0"
                  >
                    Любовь
                  </button>
                  <button
                    onClick={() => { setOpen(true); visit("heart"); }}
                    className="text-white hover:text-pink-300 transition-colors duration-300 text-sm sm:text-base text-left bg-transparent border-none cursor-pointer p-0"
                  >
                    Моё сердце
                  </button>
                  <button
                    onClick={() => allVisited && setOpenForever(true)}
                    disabled={!allVisited}
                    title={!allVisited ? "Сначала открой все остальные" : undefined}
                    className={`transition-colors duration-300 text-sm sm:text-base text-left bg-transparent border-none p-0 ${allVisited ? "text-white hover:text-pink-300 cursor-pointer" : "text-white/30 cursor-not-allowed"}`}
                  >
                    Навсегда {!allVisited && "🔒"}
                  </button>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Моменты</h3>
                  <button
                    onClick={() => { setOpenMemories(true); visit("memories"); }}
                    className="text-white hover:text-pink-300 transition-colors duration-300 text-sm sm:text-base text-left bg-transparent border-none cursor-pointer p-0"
                  >
                    Воспоминания
                  </button>
                  <button
                    onClick={() => { setOpenDreams(true); visit("dreams"); }}
                    className="text-white hover:text-pink-300 transition-colors duration-300 text-sm sm:text-base text-left bg-transparent border-none cursor-pointer p-0"
                  >
                    Мечты
                  </button>
                  <button
                    onClick={() => { setOpenTogether(true); visit("together"); }}
                    className="text-white hover:text-pink-300 transition-colors duration-300 text-sm sm:text-base text-left bg-transparent border-none cursor-pointer p-0"
                  >
                    Вместе
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
                <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                  ЛЮБЛЮ ❤️
                </h1>
                <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} Навсегда</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                src="https://cdn.poehali.dev/projects/e2777924-1b7f-4818-bd63-b7e6c541a958/bucket/55237709-9818-4a07-8738-c44b2d13ccd5.jpg"
                alt="Моё сердце"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-6 text-white text-center">
                <p className="text-lg font-bold mb-2">Моё сердце ❤️</p>
                <p className="text-sm opacity-90 leading-relaxed">Навсегда занято исключительно тобой</p>
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

      <AnimatePresence>
        {openForever && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenForever(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-6 px-8 py-12 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="text-[120px] leading-none select-none"
              >
                ❤️
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white text-2xl sm:text-3xl font-bold tracking-wide"
              >
                Серафима, я тебя люблю
              </motion.p>
              <button
                onClick={() => setOpenForever(false)}
                className="mt-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openDreams && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenDreams(false)}
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
                src="https://cdn.poehali.dev/projects/e2777924-1b7f-4818-bd63-b7e6c541a958/bucket/185821c3-2909-4216-a19d-495f612b5f69.png"
                alt="Мечты"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-6 text-white text-center">
                <p className="text-lg font-bold mb-2">Мечты ✨</p>
                <p className="text-sm opacity-90 leading-relaxed">Наши с тобой локальные мемы это лучшее что мы могли придумать</p>
              </div>
              <button
                onClick={() => setOpenDreams(false)}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openMemories && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenMemories(false)}
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
                src="https://cdn.poehali.dev/projects/e2777924-1b7f-4818-bd63-b7e6c541a958/bucket/82c3e3fb-8a0d-4016-9851-696fe6b53f3f.jpg"
                alt="Воспоминания"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-6 text-white text-center">
                <p className="text-lg font-bold mb-2">Воспоминания 🎮</p>
                <p className="text-sm opacity-90 leading-relaxed">СЛК КАНОНИЩЕ</p>
              </div>
              <button
                onClick={() => setOpenMemories(false)}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openLove && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenLove(false)}
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
                src="https://cdn.poehali.dev/projects/e2777924-1b7f-4818-bd63-b7e6c541a958/bucket/bcc312d0-4a51-4f74-b377-24562eec3af2.jpg"
                alt="Любовь"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-6 text-white text-center">
                <p className="text-lg font-bold mb-2">Любовь ❤️</p>
                <p className="text-sm opacity-90 leading-relaxed">Моя любовь к тебе не имеет границ</p>
              </div>
              <button
                onClick={() => setOpenLove(false)}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openTogether && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenTogether(false)}
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
                src="https://cdn.poehali.dev/projects/e2777924-1b7f-4818-bd63-b7e6c541a958/bucket/9fa24614-7386-4b6a-aa9b-76abf6504d24.jpg"
                alt="Вместе"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-6 text-white text-center">
                <p className="text-lg font-bold mb-2">Вместе 🕶️</p>
                <p className="text-sm opacity-90 leading-relaxed">Мы самые крутые</p>
              </div>
              <button
                onClick={() => setOpenTogether(false)}
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