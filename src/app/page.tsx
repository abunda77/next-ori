// "use client";

// import { useState, useEffect } from "react";
// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

// export default function Home() {
//   const [fetchedWord, setFetchedWord] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8000");
//         const data = await response.json();
//         setFetchedWord(Object.keys(data)[0]); // Get the first key from the response
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setFetchedWord("Error");
//       }
//     };

//     fetchData();
//   }, []);

//   const words = [
//     {
//       text: "Build",
//     },
//     {
//       text: "awesome",
//     },
//     {
//       text: "apps",
//     },
//     {
//       text: "with",
//     },
//     {
//       text: fetchedWord,
//       className: "text-blue-500 dark:text-blue-500",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center h-[40rem]  ">
//       <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
//         The road to freedom starts from here
//       </p>
//       <TypewriterEffectSmooth words={words} />
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
//         <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
//           Join now
//         </button>
//         <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
//           Signup
//         </button>
//       </div>
//     </div>
//   );
// }
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
