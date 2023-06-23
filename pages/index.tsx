import Image from "next/image";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { LinearlyScaledCardGroup } from "../components/LinearlyScaledCardGroup";
import { RotateCardGroup } from "../components/RotateCardGroup";
import { StackedCardGroup } from "../components/StackedCardGroup";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <Heading as="h3" className="!text-[#577D86]">
          Animate on Scroll
        </Heading>
        <Text className="text-gray-500">
          &quot;There is no one who loves pain itself, who seeks after it and
          wants to have it, simply because it is pain...&quot;
        </Text>
      </div>

      <StackedCardGroup className="w-full space-y-[1400px] !mt-8 !mb-40">
        <div className="rounded-3xl shadow-md h-full bg-[#577D86]" />
        <div className="rounded-3xl shadow-md h-full bg-[#569DAA]" />
        <div className="rounded-3xl shadow-md h-full bg-[#87CBB9]" />
        <div className="rounded-3xl shadow-md h-full bg-[#B9EDDD]" />
      </StackedCardGroup>

      <RotateCardGroup
        className="w-full flex flex-col items-center gap-[800px] !mt-8 !mb-[800px]"
        bottomLayer={<span>Animate on Scroll</span>}
        bottomLayerClassName="text-[40px] md:text-[100px] text-[#577D86] font-bold"
      >
        <div className="rounded-3xl shadow-md h-full bg-[#577D86]" />
        <div className="rounded-3xl shadow-md h-full bg-[#569DAA]" />
        <div className="rounded-3xl shadow-md h-full bg-[#87CBB9]" />
        <div className="rounded-3xl shadow-md h-full bg-[#B9EDDD]" />
      </RotateCardGroup>

      <LinearlyScaledCardGroup
        className="w-full flex flex-col items-center gap-[800px] !mt-8 !mb-[800px]"
        // bottomLayer={<span>Animate on Scroll</span>}
        // bottomLayerClassName="text-[40px] md:text-[100px] text-[#577D86] font-bold"
      >
        <div className="rounded-3xl shadow-md h-full bg-[#569DAA]" />
      </LinearlyScaledCardGroup>
    </Layout>
  );
}
