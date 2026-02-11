import React from "react";
import TeceoLogo from "../../imports/Group616";

export default function Navbar() {
  return (
    <nav className="w-full max-w-[1440px] mx-auto px-6 py-6 flex items-center justify-between">
      <a href="https://collection.teceo.co/verão-27" className="w-24 h-auto block hover:opacity-90 transition-opacity">
        <TeceoLogo />
      </a>
      
      <div className="flex items-center gap-8">
        <a href="https://collection.teceo.co/verão-27-local" className="hidden md:block text-sm font-medium text-[#242424] opacity-60 hover:opacity-100 transition-opacity">
          local
        </a>
        <a href="https://collection.teceo.co/verao-27-confirmar-presenca" className="bg-[#242424] text-white px-6 py-2 rounded-full text-sm font-normal hover:bg-black transition-colors">
          confirmar presença
        </a>
      </div>
    </nav>
  );
}
