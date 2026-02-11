import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgFlowers from "figma:asset/556b1a19b5d28e3161f9fbc5ca26a52a146aa78a.png";
import imgSlide1 from "figma:asset/4e6379f7318c45bcdd5464fc6ef259a9bb1bcdf3.png";
import imgSlide2 from "figma:asset/c3371a367ff02431a8289984450699c4b89e6579.png";

const slides = [
  {
    id: 1,
    title: "network qualificado",
    text: (
      <>
        um encontro fechado com c‑levels e fundadores de grandes marcas de moda e lifestyle, criado para promover trocas reais entre pares.
        <br /><br />
        aqui, você vai discutir como outras lideranças estão estruturando o crescimento do b2b, enfrentando seus gargalos e redesenhando seus modelos de distribuição na prática.
      </>
    ),
    image: imgSlide1
  },
  {
    id: 2,
    title: "conteúdo estratégico",
    text: (
      <>
        uma agenda estratégica sobre as transformações que já estão redefinindo o b2b de moda e lifestyle: da digitalização superficial à construção de modelos orientados por inteligência, dados e previsibilidade.
        <br /><br />
        um conteúdo direto ao ponto, voltado para quem decide e conduz a transformação dentro das empresas.
      </>
    ),
    image: imgSlide2
  },
  {
    id: 3,
    title: "experiência",
    text: (
      <>
        mais do que um evento, uma experiência de colaboração e evolução, onde marcamos o início de uma comunidade de líderes do ecossistema b2b.
        <br />
        o primeiro evento que trás diferentes segmentos, funções e perspectivas, unidos por uma visão comum de futuro.
      </>
    ),
    image: imgFlowers
  }
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-20 pb-32">
      <h2 className="text-5xl md:text-7xl font-light tracking-wide text-[#242424] mb-16">
        sobre o evento
      </h2>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="outline-none">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] gap-6">
                {/* Text Card */}
                <div className="bg-[#FC6B4B] rounded-[25px] p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white h-[400px] md:h-[500px] mx-1">
                  <h3 className="text-3xl md:text-5xl mb-6 md:mb-8 tracking-wide">
                    {slide.title}
                  </h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                    {slide.text}
                  </p>
                </div>

                {/* Image Card */}
                <div className="h-[400px] md:h-[500px] rounded-[25px] overflow-hidden relative mx-1">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                    />
                </div>
             </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-8 ml-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => sliderRef.current?.slickGoTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-12 bg-[#242424]" : "w-6 bg-gray-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
