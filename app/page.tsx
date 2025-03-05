"use client";

import { Poppins } from "next/font/google";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gray-500 drop-shadow-md">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white", font.className)}>
          🔐Auth
        </h1>
        <p className="text-white text-lg ">A simple Authentication Service</p>
        <div>
          <LoginButton>
            <motion.button
              whileHover={{
                rotateX: 25,
                rotateY: 10,
                boxShadow: "0px 20px 50px rgba(80, 50, 50, 0.7)",

                y: -5,
              }}
              style={{ translateZ: 100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative rounded-lg px-8 py-4 text-xl font-semibold text-gray-800 bg-white shadow-lg hover:text-gray-600 "
            >
              Sign In
            </motion.button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
