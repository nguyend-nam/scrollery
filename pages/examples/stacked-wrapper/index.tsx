import { StackedWrapper } from "../../../components/StackedWrapper";

export default function StackedWrapperDemo() {
  return (
    <div className="!bg-slate-50 p-8">
      <h1 className="!text-v2-green-extraDark">
        <code>StackedWrapper</code>
      </h1>

      <StackedWrapper
        className="w-full space-y-[800px] !mt-8 !mb-40"
        itemClassName="!h-[300px]"
      >
        <div className="rounded-3xl shadow-md h-full bg-v2-green-extraDark" />
        <div className="rounded-3xl shadow-md h-full bg-v2-green-dark" />
        <div className="rounded-3xl shadow-md h-full bg-v2-green-normal" />
        <div className="rounded-3xl shadow-md h-full bg-v2-green-light" />
      </StackedWrapper>
    </div>
  );
}
