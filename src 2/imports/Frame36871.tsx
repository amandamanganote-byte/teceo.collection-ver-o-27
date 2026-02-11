function Data() {
  return (
    <div className="content-stretch flex gap-[13.417px] items-center overflow-clip relative shrink-0" data-name="Data">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium opacity-40 relative shrink-0 w-[147.583px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        dia
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-[429.333px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        11 de março de 2026
      </p>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex gap-[13.417px] items-center overflow-clip relative shrink-0" data-name="Data">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium opacity-40 relative shrink-0 w-[147.583px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        exclusivo
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-[429.333px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        para convidados selecionados
      </p>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex gap-[13.417px] items-center overflow-clip relative shrink-0" data-name="Data">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium opacity-40 relative shrink-0 w-[147.583px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        local
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-[429.333px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        leila restaurante
      </p>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex gap-[13.417px] items-center overflow-clip relative shrink-0" data-name="Data">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium opacity-40 relative shrink-0 w-[147.583px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        horário
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-[429.333px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        19h às 23h
      </p>
    </div>
  );
}

function Information() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13.417px] items-center leading-[30.188px] left-px lowercase overflow-clip text-[23.479px] text-black top-[95px] whitespace-pre-wrap" data-name="Information">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#242424] h-[38px] left-0 rounded-[28px] top-[308px] w-[170px]" />
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal justify-end leading-[0] left-[85.5px] text-[22.458px] text-center text-white top-[344px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[33.771px]">como chegar</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal justify-end leading-[0] left-[calc(50%-197.67px)] lowercase text-[#242424] text-[32.579px] text-center top-[46px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[45.249px]">save the date</p>
      </div>
      <Information />
    </div>
  );
}