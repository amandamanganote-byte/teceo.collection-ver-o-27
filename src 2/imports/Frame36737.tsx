import imgKateLaine7MMpEdin4Unsplash1 from "figma:asset/e8db50a7332863f03dc9da8447e55616a1565143.png";
import imgPremiumPhoto16923409736366F2Ff926Af391 from "figma:asset/19cb82ac72cf9b8186e305c97978e2f3af6026b3.png";
import imgPremiumPhoto17496669928939638C9C0C6041 from "figma:asset/988100c8e7c2dd5cbf36dd00adcfe198ff1415b7.png";
import imgPremiumPhoto1763749475070A058D06879Eb1 from "figma:asset/250301668c4edc73ade83617f57a773e30d41776.png";

function Frame() {
  return (
    <div className="absolute bg-[#242424] h-[196.217px] left-0 overflow-clip rounded-[22.213px] top-0 w-[265.633px]">
      <div className="absolute h-[399px] left-0 top-[-86px] w-[266px]" data-name="premium_photo-1749666992751-245f101a8cda 1" />
      <div className="absolute h-[398px] left-0 top-[-54px] w-[266px]" data-name="kate-laine-7mMp_EDIN-4-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKateLaine7MMpEdin4Unsplash1} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#242424] h-[294.261px] left-[280.57px] overflow-clip rounded-[22.213px] top-0 w-[265.88px]">
      <div className="absolute h-[409px] left-[0.43px] top-[-61px] w-[273px]" data-name="premium_photo-1692340973636-6f2ff926af39 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPremiumPhoto16923409736366F2Ff926Af391} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#242424] h-[294.261px] left-0 overflow-clip rounded-[22.213px] top-[211.03px] w-[265.88px]">
      <div className="absolute h-[463px] left-[-22px] top-[-115.03px] w-[309px]" data-name="premium_photo-1749666992893-9638c9c0c604 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPremiumPhoto17496669928939638C9C0C6041} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#242424] h-[196.217px] left-[280px] overflow-clip rounded-[22.213px] top-[313px] w-[266.558px]">
      <div className="absolute h-[365px] left-[-9px] top-[-84px] w-[243px]" data-name="premium_photo-1763749475070-a058d06879eb 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPremiumPhoto1763749475070A058D06879Eb1} />
      </div>
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="relative size-full">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}