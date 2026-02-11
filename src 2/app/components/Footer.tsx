import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import TeceoFooterLogo from "../../imports/Group3202";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Pre-footer Text */}
      <div className="max-w-[1440px] mx-auto px-6 mb-20">
        <h2 className="text-4xl md:text-6xl font-light text-[#242424] max-w-2xl leading-tight">
          nenhum bom negócio <br />
          é feito sozinho.
        </h2>
      </div>

      {/* Dark Footer Bar */}
      <div className="bg-[#242424] text-white py-12">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-12">
            {/* Logo */}
            <a href="https://collection.teceo.co/verão-27" className="w-32 h-auto block hover:opacity-90 transition-opacity">
              <TeceoFooterLogo />
            </a>

            {/* Socials */}
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/teceo.co/" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/company/teceo/" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
              <a href="https://www.youtube.com/channel/UCUt4zYGDs1zNDNa2mqHvY1Q" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Youtube size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://collection.teceo.co/verão-27-local" className="hidden md:block text-sm font-medium text-white opacity-60 hover:opacity-100 transition-opacity">
              local
            </a>
            <a href="https://collection.teceo.co/verao-27-confirmar-presenca" className="bg-white text-[#242424] px-6 py-2 rounded-full text-sm font-normal hover:bg-gray-100 transition-colors">
              confirmar presença
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
