// components/NavMenu.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="z-50 bg-transparent mt-4 w-fit rounded-md backdrop-blur-sm">
      <div className="mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="flex space-x-4">
            {["Home", "Projects"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-zinc-700 transition-colors duration-200"
              >
                {item}
                {pathname ===
                  (item === "Home" ? "/" : `/${item.toLowerCase()}`) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    layoutId="underline"
                    initial={false}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
