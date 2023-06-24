import { LinearlyScaledCardWrapper } from "../../components/LinearlyScaledCardWrapper";

export default function LinearlyScaledCardWrapperDemo() {
  return (
    <div className="!bg-slate-50 p-8">
      <h1 className="!text-[#577D86]">
        <code>LinearlyScaledCardWrapper</code>
      </h1>
      <p className="!text-gray-500 mb-[300px]">
        &quot;There is no one who loves pain itself, who seeks after it and
        wants to have it, simply because it is pain...&quot;
      </p>

      <LinearlyScaledCardWrapper className="w-full flex flex-col items-center gap-[800px] !mt-8 !mb-[800px]">
        <div className="rounded-3xl shadow-md h-full bg-[#569DAA]" />
      </LinearlyScaledCardWrapper>
    </div>
  );
}
