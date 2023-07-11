import { StackedCardWrapper } from "../../../components/StackedCardWrapper";

export default function StackedCardWrapperDemo() {
  return (
    <div className="!bg-slate-50 p-8">
      <h1 className="!text-v2-green-extraDark">
        <code>StackedCardWrapper</code>
      </h1>

      <StackedCardWrapper
        className="w-full space-y-[800px] !mt-8 !mb-40"
        itemClassName="!h-[300px]"
      >
        <div className="rounded-3xl shadow-md h-full bg-v2-green-extraDark" />
        <div className="rounded-3xl shadow-md h-full bg-v2-green-dark" />
        <div className="rounded-3xl shadow-md h-full bg-v2-green-normal" />
        <div className="rounded-3xl shadow-md h-full bg-v2-green-light" />
      </StackedCardWrapper>
    </div>
  );
}
