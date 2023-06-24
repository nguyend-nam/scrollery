import { RotateCardWrapper } from "../../components/RotateCardWrapper";

export default function Home() {
  return (
    <div className="!bg-slate-50 p-8">
      <h1 className="!text-[#577D86]">
        <code>RotateCardWrapper</code>
      </h1>
      <p className="!text-gray-500 mb-[300px]">
        &quot;There is no one who loves pain itself, who seeks after it and
        wants to have it, simply because it is pain...&quot;
      </p>

      <RotateCardWrapper
        className="w-full flex flex-col items-center gap-[800px] !mt-8 !mb-[800px]"
        bottomLayer={<span>Animate on Scroll</span>}
        bottomLayerClassName="text-[30px] md:text-[70px] text-[#577D86] font-bold"
      >
        <div className="rounded-3xl shadow-md h-full bg-[#577D86]" />
        <div className="rounded-3xl shadow-md h-full bg-[#569DAA]" />
        <div className="rounded-3xl shadow-md h-full bg-[#87CBB9]" />
        <div className="rounded-3xl shadow-md h-full bg-[#B9EDDD]" />
      </RotateCardWrapper>
    </div>
  );
}
