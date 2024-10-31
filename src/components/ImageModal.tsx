// components/ImageModal.js
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  src: string;
  alt: string;
}

export default function ImageModal({ src, alt }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Image
        src={src}
        width={2048}
        height={2048}
        alt={alt}
        className="w-full h-auto sm:w-64 sm:h-64 object-cover rounded-md bg-zinc-700 cursor-pointer"
        onClick={toggleModal}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                width={1024}
                height={1024}
                alt={alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={toggleModal}
                className="absolute top-4 -right-20 text-white bg-red-500 bg-opacity-80 rounded-md p-2"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
