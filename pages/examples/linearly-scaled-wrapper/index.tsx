import { LinearlyScaledWrapper } from "../../../components/LinearlyScaledWrapper";

export default function LinearlyScaledWrapperDemo() {
  return (
    <div className="!bg-slate-50 p-8">
      <h1 className="!text-v2-green-extraDark mb-[300px]">
        <code>LinearlyScaledWrapper</code>
      </h1>

      <LinearlyScaledWrapper className="w-full flex flex-col items-center gap-[800px] !mt-8 !mb-[800px]">
        <div className="rounded-3xl shadow-md h-full bg-v2-green-dark" />
      </LinearlyScaledWrapper>
    </div>
  );
}
