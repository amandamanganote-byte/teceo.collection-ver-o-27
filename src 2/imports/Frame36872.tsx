function Line() {
  return (
    <div className="h-[2.642px] relative shrink-0 w-[37.366px]" data-name="line">
      <div className="absolute inset-[-14.28%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.3644 3.01932">
          <g id="line">
            <line id="Line 1" stroke="var(--stroke-0, #242424)" strokeWidth="3.01932" x1="3.39713" x2="37.3644" y1="1.50966" y2="1.50966" />
            <rect fill="var(--fill-0, #242424)" height="2.6419" id="Rectangle 2" opacity="0" width="2.26449" y="0.377343" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] h-[57px] items-start left-[590px] top-[338px]" data-name="date">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#242424] text-[31.703px] tracking-[3.1703px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        11/03
      </p>
      <Line />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="-translate-y-full absolute flex flex-col font-['Nunito_Sans:ExtraLight',sans-serif] font-extralight justify-end leading-[0] left-0 text-[#242424] text-[112.84px] top-[156px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p>
          <span className="leading-[155.155px]">teceo.co</span>
          <span className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[155.155px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            llection
          </span>
        </p>
      </div>
      <Date />
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] left-[591px] text-[#242424] text-[31.703px] top-[401px] tracking-[3.1703px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        São Paulo
      </p>
      <div className="-translate-y-full absolute flex flex-col font-['Nunito_Sans:Light',sans-serif] font-light justify-end leading-[0] left-0 text-[#242424] text-[30px] top-[445px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[28.077px]">para quem move o B2B</p>
      </div>
      <div className="-translate-y-full absolute flex flex-col font-['Nunito_Sans:Light',sans-serif] font-light justify-end leading-[0] left-0 text-[#242424] text-[30px] top-[346px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[28.077px]">um evento</p>
      </div>
      <div className="-translate-y-full absolute flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-end leading-[0] left-0 text-[#fc6b4b] text-[42.159px] top-[413px] tracking-[4.6375px] w-[237px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[63.397px] whitespace-pre-wrap">exclusivo</p>
      </div>
      <div className="-translate-y-full absolute flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal justify-end leading-[0] left-0 text-[#fc6b4b] text-[33.18px] top-[195px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[49.895px]">1ª edição_verão 27</p>
      </div>
    </div>
  );
}