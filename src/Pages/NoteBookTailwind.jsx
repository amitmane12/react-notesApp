import React from "react";

const NoteBookTailwind = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-50 font-sans">
      {/* Premium Tailwind Navbar with Glassmorphism */}
      <nav className="sticky top-0 z-50 flex h-20 items-center justify-between px-10 bg-slate-900/70 backdrop-blur-xl border-b border-white/10 shadow-xl">
        {/* Logo with Gradient Text */}
        <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity duration-300">
          AMIT
        </div>

        {/* Navigation Links with Micro-animations */}
        <ul className="flex h-full items-center gap-10">
          {["Home", "React", "Angular", "Vue"].map((item) => (
            <li key={item} className="h-full flex items-center">
              <a
                href="#"
                className="relative py-2 text-slate-400 font-medium transition-colors duration-300 hover:text-white group"
              >
                {item}
                {/* Animated underline effect on hover */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 ease-in-out group-hover:w-full rounded-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="p-10 max-w-7xl mx-auto mt-10">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to the Tailwind Version
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            This entire page is built using 100% Tailwind CSS utility classes.
            It mimics the beautiful glassmorphism style of the previous custom
            CSS version, taking advantage of Tailwind's backdrop-blur,
            text-gradients, and group-hover utilities for those smooth
            animations!
          </p>
        </div>
      </main>
    </div>
  );
};

export default NoteBookTailwind;
// import React from 'react'

// const NoteBookTailwind = () => {
//   return (
//     <div>NoteBookTailwind</div>
//   )
// }

// export default NoteBookTailwind
