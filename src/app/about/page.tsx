"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-400 text-white">
      <Image
        src="/images/dark-logo.png"
        alt="Company Logo"
        width={150}
        height={150}
        className="mb-8"
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
        Coming Soon
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        We are working hard to bring you something amazing!
      </p>

      <div className="w-full max-w-md space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-white text-black"
        />
        <Button className="w-full bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
          Notify Me
        </Button>
      </div>
    </div>
  );
}
