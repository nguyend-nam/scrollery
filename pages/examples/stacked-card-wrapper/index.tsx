import { StackedCardWrapper } from "../../../components/StackedCardWrapper";

export default function StackedCardWrapperDemo() {
  return (
    <div className="!bg-slate-50 p-8">
      <h1 className="!text-[#577D86]">
        <code>StackedCardWrapper</code>
      </h1>

      <StackedCardWrapper
        className="w-full space-y-[800px] !mt-8 !mb-40"
        itemClassName="!h-[300px]"
      >
        <div className="rounded-3xl shadow-md h-full bg-[#577D86]" />
        <div className="rounded-3xl shadow-md h-full bg-[#569DAA]" />
        <div className="rounded-3xl shadow-md h-full bg-[#87CBB9]" />
        <div className="rounded-3xl shadow-md h-full bg-[#B9EDDD]" />
      </StackedCardWrapper>
    </div>
  );
}
