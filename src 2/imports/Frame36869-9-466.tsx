import imgPremiumPhoto173187662325746981A738D692 from "figma:asset/556b1a19b5d28e3161f9fbc5ca26a52a146aa78a.png";

function Description() {
  return (
    <div className="absolute contents left-0 top-0" data-name="description">
      <div className="absolute bg-[#fc6b4b] h-[408.445px] left-0 rounded-[25.058px] top-0 w-[837px]" />
      <div className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] left-[46px] text-[24px] text-white top-[160px] w-[754px] whitespace-pre-wrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="mb-0">mais do que um evento, uma experiência de colaboração e evolução, onde marcamos o início de uma comunidade de líderes do ecossistema b2b.</p>
        <p>{`o primeiro evento que trás diferentes segmentos, funções e perspectivas, unidos por uma visão comum de futuro. `}</p>
      </div>
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] left-[45.63px] text-[54.811px] text-white top-[60px] tracking-[5.4811px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`experiência  `}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#242424] h-[408px] left-[864px] overflow-clip rounded-[25.06px] top-0 w-[394px]">
      <div className="absolute h-[661px] left-0 top-[-188px] w-[441px]" data-name="premium_photo-1731876623257-46981a738d69 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPremiumPhoto173187662325746981A738D692} />
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Description />
      <Frame />
    </div>
  );
}