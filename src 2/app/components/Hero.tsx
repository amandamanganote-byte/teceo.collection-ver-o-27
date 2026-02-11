import React from "react";
import imgKateLaine from "figma:asset/e8db50a7332863f03dc9da8447e55616a1565143.png";
import imgPremiumPhoto1 from "figma:asset/19cb82ac72cf9b8186e305c97978e2f3af6026b3.png";
import imgImage761 from "figma:asset/63698bc166500d75e55d65bf7d72f2e346492c88.png";
import imgPremiumPhoto2 from "figma:asset/988100c8e7c2dd5cbf36dd00adcfe198ff1415b7.png";
import imgPremiumPhoto3 from "figma:asset/250301668c4edc73ade83617f57a773e30d41776.png";

function Line() {
  return (
    <div className="h-[3px] relative shrink-0 w-[37px] my-2">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 4">
        <line stroke="#242424" strokeWidth="3" x1="3" x2="38" y1="2" y2="2" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 lg:gap-24 items-center">
      {/* Left Content */}
      <div className="flex flex-col gap-8 lg:gap-12 relative">
        <div>
          <h1 className="text-6xl md:text-8xl lg:text-[112px] font-extralight tracking-tight text-[#242424] leading-[0.9]">
            <span>teceo.co</span>
            <span className="font-normal">llection</span>
          </h1>
          <p className="text-[#FC6B4B] text-xl md:text-2xl lg:text-[33px] mt-4 font-normal">
            1ª edição_verão 27
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-8 lg:mt-16">
          <div className="flex flex-col gap-1">
            <p className="text-[#242424] text-xl lg:text-[30px] font-light leading-tight">
              um evento
            </p>
            <p className="text-[#FC6B4B] text-3xl lg:text-[42px] font-bold tracking-[0.1em] leading-tight my-1">
              exclusivo
            </p>
            <p className="text-[#242424] text-xl lg:text-[30px] font-light leading-tight">
              para quem move o B2B
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-2xl lg:text-[32px] font-bold text-[#242424] tracking-[0.1em] leading-none">
              11/03
            </p>
            <Line />
            <p className="text-2xl lg:text-[32px] font-bold text-[#242424] tracking-[0.1em] leading-none mt-2">
              São Paulo
            </p>
          </div>
        </div>
      </div>

      {/* Right Images (Collage) */}
      <div className="flex gap-4 h-full w-full max-w-md mx-auto lg:ml-auto">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 w-1/2">
          {/* Top Left - Oranges */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#242424]">
            <img 
              src={imgKateLaine} 
              alt="Oranges on table" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Bottom Left - Interior */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#242424]">
            <img 
              src={imgPremiumPhoto2} 
              alt="Interior design" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-1/2">
          {/* Top Right - Grass */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#242424]">
            <img 
              src={imgPremiumPhoto1} 
              alt="Relaxing on grass" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Bottom Right - Tennis */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#242424]">
            <img 
              src={imgPremiumPhoto3} 
              alt="Tennis player" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
