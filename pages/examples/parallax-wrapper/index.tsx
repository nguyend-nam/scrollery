import { ParallaxWrapper } from "../../../components/ParallaxWrapper";

export default function ParallaxWrapperDemo() {
  return (
    <div className="!bg-slate-50 p-8">
      <h1 className="!text-v2-green-extraDark mb-[100px]">
        <code>ParallaxWrapper</code>
      </h1>

      <div className="text-center">
        <p className="text-v2-green-normal">Start scrolling</p>
      </div>

      <div className="w-full flex items-center gap-4 justify-center !mt-8 !h-[1500px]">
        <ParallaxWrapper layer={-3} className="w-1/3">
          <div className="rounded-lg md:rounded-3xl shadow-md w-full aspect-square bg-v2-green-light" />
        </ParallaxWrapper>
        <ParallaxWrapper layer={0} className="w-1/3">
          <div className="rounded-lg md:rounded-3xl shadow-md w-full aspect-square bg-v2-green-normal" />
        </ParallaxWrapper>
        <ParallaxWrapper layer={5} className="w-1/3">
          <div className="rounded-lg md:rounded-3xl shadow-md w-full aspect-square bg-v2-green-dark" />
        </ParallaxWrapper>
      </div>
    </div>
  );
}
