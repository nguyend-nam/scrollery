import { RotateCardWrapper } from "../../../components/RotateCardWrapper";

export default function Home() {
  return (
    <div className="!bg-slate-50 p-8">
      <h1 className="!text-[#477076] mb-[300px]">
        <code>RotateCardWrapper</code>
      </h1>

      <RotateCardWrapper
        className="w-full flex flex-col items-center gap-[800px] !mt-8 !mb-[800px]"
        bottomLayer={<span>Animate on Scroll</span>}
        bottomLayerClassName="text-[30px] md:text-[70px] text-[#477076] font-bold"
      >
        <div className="rounded-3xl shadow-md h-full bg-[#477076]" />
        <div className="rounded-3xl shadow-md h-full bg-[#569DAA]" />
        <div className="rounded-3xl shadow-md h-full bg-[#32C4C0]" />
        <div className="rounded-3xl shadow-md h-full bg-[#A5F1E9]" />
      </RotateCardWrapper>
    </div>
  );
}
