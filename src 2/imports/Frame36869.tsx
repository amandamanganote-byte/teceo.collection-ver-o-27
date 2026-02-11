import imgPremiumPhoto173187662325746981A738D691 from "figma:asset/556b1a19b5d28e3161f9fbc5ca26a52a146aa78a.png";
import imgPremiumPhoto1676490428263847Fbfafe3201 from "figma:asset/4e6379f7318c45bcdd5464fc6ef259a9bb1bcdf3.png";
import imgSofiaLasheva7EQeFqVUbDcUnsplash1 from "figma:asset/c3371a367ff02431a8289984450699c4b89e6579.png";

function Description() {
  return (
    <div className="absolute contents left-0 top-0" data-name="description">
      <div className="absolute bg-[#fc6b4b] h-[408.445px] left-0 rounded-[25.058px] top-0 w-[837px]" />
      <div className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] left-[46px] text-[24px] text-white top-[160px] w-[754px] whitespace-pre-wrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="mb-0">{`mais do que um evento, este encontro marca o início de uma comunidade de líderes do ecossistema B2B, de diferentes segmentos, funções e perspectivas, unidos por uma visão comum de futuro. `}</p>
        <p>um espaço para construir, colaborar e impulsionar juntos a evolução do B2B no mercado.</p>
      </div>
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] left-[45.63px] text-[54.811px] text-white top-[60px] tracking-[5.4811px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        comunidade de líderes
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#242424] h-[408px] left-[864px] overflow-clip rounded-[25.06px] top-0 w-[394px]">
      <div className="absolute h-[408px] left-0 rounded-[25.058px] top-0 w-[394px]" data-name="photo" />
      <div className="absolute h-[661px] left-0 top-[-188px] w-[441px]" data-name="premium_photo-1731876623257-46981a738d69 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPremiumPhoto173187662325746981A738D691} />
      </div>
      <div className="absolute h-[600px] left-[-1px] top-[-158px] w-[400px]" data-name="premium_photo-1676490428263-847fbfafe320 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPremiumPhoto1676490428263847Fbfafe3201} />
      </div>
      <div className="absolute h-[700px] left-[-37px] top-[-79px] w-[467px]" data-name="sofia-lasheva-7EQeFqVUbDc-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSofiaLasheva7EQeFqVUbDcUnsplash1} />
      </div>
      <div className="absolute h-[661px] left-0 top-[-188px] w-[441px]" data-name="premium_photo-1731876623257-46981a738d69 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPremiumPhoto173187662325746981A738D691} />
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