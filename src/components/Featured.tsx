import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Featured() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/e2777924-1b7f-4818-bd63-b7e6c541a958/files/d7dc20b8-10d2-4c07-acb4-40fec23d3f48.jpg"
            alt="Colorful nature landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Чувства, которые не проходят</h3>
          <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
            Это не просто слова — это целая вселенная. Каждый день рядом с тобой особенный,
            и моё сердце бьётся только для тебя.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
          >
            ❤️ Навсегда
          </button>
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
                src="https://cdn.poehali.dev/projects/e2777924-1b7f-4818-bd63-b7e6c541a958/bucket/8c97082b-f6c9-4096-8f8f-9b38de9b596c.jpg"
                alt="Навсегда"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white text-center">
                <p className="text-xl font-bold">Навсегда ❤️</p>
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
