import { RotateCardWrapper } from "../../../components/RotateCardWrapper";

export default function Home() {
  return (
    <div className="!bg-slate-50 p-8">
      <h1 className="!text-v2-green-extraDark mb-[300px]">
        <code>RotateCardWrapper</code>
      </h1>

      <RotateCardWrapper
        className="w-full flex flex-col items-center gap-[800px] !mt-8 !mb-[800px]"
        bottomLayer={<span>Animate on Scroll</span>}
        bottomLayerClassName="text-[30px] md:text-[70px] text-v2-green-extraDark font-bold"
      >
        <div className="rounded-3xl shadow-md h-full bg-v2-green-extraDark" />
        <div className="rounded-3xl shadow-md h-full bg-v2-green-dark" />
        <div className="rounded-3xl shadow-md h-full bg-v2-green-normal" />
        <div className="rounded-3xl shadow-md h-full bg-v2-green-light" />
      </RotateCardWrapper>
    </div>
  );
}
