import imgImage769 from "figma:asset/25a26b80c79c17b811728e26125e7ccf619f51c8.png";

function Frame() {
  return <div className="absolute border border-black border-solid h-[620.063px] left-0 rounded-[25px] top-0 w-[502px]" />;
}

function Frame2() {
  return (
    <div className="absolute h-[620.063px] left-0 top-[14px] w-[502px]">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute border border-black border-solid h-[620.063px] left-[13px] overflow-clip rounded-[18.593px] top-0 w-[502px]">
      <div className="absolute h-[669.54px] left-[-1px] top-[-18.66px] w-[502.256px]" data-name="image 769">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage769} />
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="relative size-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}