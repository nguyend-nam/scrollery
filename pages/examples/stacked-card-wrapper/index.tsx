import { StackedCardWrapper } from "../../../components/StackedCardWrapper";

export default function StackedCardWrapperDemo() {
  return (
    <div className="!bg-slate-50 p-8">
      <h1 className="!text-[#477076]">
        <code>StackedCardWrapper</code>
      </h1>

      <StackedCardWrapper
        className="w-full space-y-[800px] !mt-8 !mb-40"
        itemClassName="!h-[300px]"
      >
        <div className="rounded-3xl shadow-md h-full bg-[#477076]" />
        <div className="rounded-3xl shadow-md h-full bg-[#569DAA]" />
        <div className="rounded-3xl shadow-md h-full bg-[#32C4C0]" />
        <div className="rounded-3xl shadow-md h-full bg-[#A5F1E9]" />
      </StackedCardWrapper>
    </div>
  );
}
