import React from "react";
import imgRestaurant from "figma:asset/25a26b80c79c17b811728e26125e7ccf619f51c8.png";

export default function SaveTheDate() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Image */}
      <div className="relative w-full max-w-[515px] mx-auto aspect-[515/634]">
        {/* Background Frame */}
        <div className="absolute top-[2.2%] left-0 w-[97.5%] h-[97.8%] border border-black rounded-[25px]" />
        
        {/* Image Frame */}
        <div className="absolute top-0 right-0 w-[97.5%] h-[97.8%] border border-black rounded-[19px] overflow-hidden bg-gray-100">
          <img 
            src={imgRestaurant} 
            alt="Leila Restaurante" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-12 lg:pl-12">
        <h2 className="text-3xl md:text-[32px] font-normal lowercase tracking-wide text-[#242424]">
          save the date
        </h2>

        <div className="flex flex-col gap-6 text-lg md:text-2xl">
          <div className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
            <span className="text-[#242424] opacity-40 font-medium lowercase">dia</span>
            <span className="text-[#242424] font-normal lowercase">11 de março de 2026</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
            <span className="text-[#242424] opacity-40 font-medium lowercase">exclusivo</span>
            <span className="text-[#242424] font-normal lowercase">para convidados selecionados</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
            <span className="text-[#242424] opacity-40 font-medium lowercase">local</span>
            <span className="text-[#242424] font-normal lowercase">leila restaurante</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
            <span className="text-[#242424] opacity-40 font-medium lowercase">horário</span>
            <span className="text-[#242424] font-normal lowercase">19h às 23h</span>
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-[#242424] text-white px-10 py-3 rounded-full text-lg lowercase tracking-wide hover:bg-black transition-colors">
            como chegar
          </button>
        </div>
      </div>
    </section>
  );
}
