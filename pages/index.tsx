import { LinearlyScaledCardWrapper } from "../components/LinearlyScaledCardWrapper";
import { StackedCardWrapper } from "../components/StackedCardWrapper";
import { Logo } from "../components/Logo";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Head from "next/head";
import { useClipboard } from "@dwarvesf/react-hooks";

export default function Home() {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { onCopy, hasCopied } = useClipboard(
    "yarn add @nguyend-nam/scrollery-ts"
  );

  return (
    <>
      <Head>
        <title>Scrollery</title>
      </Head>
      <div>
        <header className="fixed flex items-center gap-2 top-0 z-10 bg-white w-screen p-4 px-6 text-[#577D86] font-semibold shadow-md text-xl">
          <Logo width={36} height={36} />
          Scrollery
        </header>
        <div
          className="flex justify-start items-start md:items-center sticky top-0 min-h-screen bg-slate-100 pt-[86px] md:pt-4 pb-4 px-4 md:px-40"
          style={{
            backgroundImage: "url(thumb.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-md shadow-md max-w-2xl space-y-2">
            <h2 className="!text-2xl md:!text-4xl font-light md:font-extralight text-slate-500">
              enhanced{" "}
              <span className="font-bold capitalize bg-gradient-to-l from-[#577D86] via-[#577D86] to-[#87CBB9] !bg-clip-text text-transparent">
                visual experience
              </span>
            </h2>

            <h2 className="!text-2xl md:!text-4xl font-light md:font-extralight text-slate-500">
              interactive{" "}
              <span className="font-bold capitalize bg-gradient-to-l from-[#577D86] via-[#577D86] to-[#87CBB9] !bg-clip-text text-transparent">
                image animations
              </span>
            </h2>

            <h2 className="!text-2xl md:!text-4xl font-light md:font-extralight text-slate-500">
              simple{" "}
              <span className="font-bold capitalize bg-gradient-to-l from-[#577D86] via-[#577D86] to-[#87CBB9] !bg-clip-text text-transparent">
                integration
              </span>
            </h2>

            <p className="font-light text-base !my-4 text-slate-700">
              Scrollery is a specialized UI library that empowers developers to
              effortlessly animate images as users scroll through web
              applications.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                className="bg-[#569DAA] p-2 text-lg rounded-md text-white flex gap-2 items-center"
                onClick={() => {
                  setIsLoading(true);
                  push("/overview");
                }}
              >
                Get started
                <Icon
                  icon="gg:scroll-h"
                  className={`text-2xl ${isLoading ? "animate-spin" : ""}`}
                />
              </button>

              <button
                className="ring-2 ring-[#569DAA] p-2 text-lg rounded-md text-[#569DAA] shrink flex flex-nowrap gap-2 items-center"
                onClick={() => {
                  onCopy();
                }}
              >
                <span className="truncate max-w-[200px]">
                  yarn add @nguyend-nam/scrollery-ts
                </span>
                {hasCopied ? (
                  <Icon
                    icon="fluent:checkbox-checked-16-regular"
                    className="text-2xl"
                  />
                ) : (
                  <Icon icon="fluent:copy-24-regular" className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[calc(100vh/5)] bg-gradient-to-b from-white/0 to-white" />

        <div className="relative bg-gradient-to-b from-white via-white to-[#87CBB9]">
          <div className="relative p-4 md:p-8">
            <h2 className="!text-2xl md:!text-4xl font-light sticky top-[100px] text-slate-500 capitalize">
              Vision
            </h2>
            <LinearlyScaledCardWrapper
              className="w-full flex flex-col items-center gap-[800px] !my-20"
              from={120}
              to={500}
              itemClassName="!w-[500px] max-w-screen"
            >
              <div className="rounded-md relative overflow-hidden h-full p-4 md:p-6 bg-[#569DAA]">
                <p className="text-lg font-light leading-9 text-white">
                  <span className="font-normal border-b">Our vision</span> is to
                  provide a comprehensive set of tools and components
                  specifically designed to enhance the visual experience of
                  images and bring them to life with captivating scroll
                  animations. <br /> With Scrollery, you can create{" "}
                  <span className="font-normal border-b">stunning</span>,{" "}
                  <span className="font-normal border-b">interactive</span>, and{" "}
                  <span className="font-normal border-b">engaging</span> image
                  animations that leave a lasting impression on your users.
                </p>
                <div className="absolute bottom-4 md:bottom-6 left-0 !w-full flex justify-center">
                  <div className="bg-white p-2 rounded-full flex justify-center items-center">
                    <Icon
                      icon="iconoir:transition-down"
                      className="!text-[#569DAA] text-2xl"
                    />
                  </div>
                </div>
              </div>
            </LinearlyScaledCardWrapper>
          </div>

          <div className="relative p-4 md:p-8">
            <h2 className="!text-2xl md:!text-4xl font-light sticky top-[100px] text-slate-500 capitalize">
              Key features
            </h2>
            <StackedCardWrapper
              className="w-full space-y-[600px] !my-20"
              itemClassName="!h-max !top-[180px]"
            >
              <div className="rounded-lg shadow-md h-max mx-auto max-w-lg bg-white p-4 md:p-6">
                <div className="text-[#577D86] pb-4 mb-4 border-b text-2xl font-semibold capitalize">
                  Visual experience enhance
                </div>
                <div className="w-full flex justify-center mb-4">
                  <Icon
                    icon="fluent:hand-draw-28-regular"
                    className="text-slate-500 text-4xl"
                  />
                </div>
                <p className="font-light text-slate-500 text-lg">
                  Whether you&rsquo;re building a portfolio website, a creative
                  landing page, or an interactive storytelling platform,
                  Scrollery empowers you to effortlessly bring your designs to
                  life with captivating scroll animations.
                </p>
              </div>
              <div className="rounded-lg shadow-md h-max mx-auto max-w-lg bg-white p-4 md:p-6">
                <div className="text-[#577D86] pb-4 mb-4 border-b text-2xl font-semibold capitalize">
                  Simple Integration
                </div>
                <div className="w-full flex justify-center mb-4">
                  <Icon
                    icon="fluent:target-arrow-20-regular"
                    className="text-slate-500 text-4xl"
                  />
                </div>
                <p className="font-light text-slate-500 text-lg">
                  Scrollery offers a user-friendly and straightforward
                  integration process, allowing you to easily animate images
                  with minimal setup. Our library provides a set of intuitive
                  components that seamlessly work with your existing codebase,
                  enabling you to focus on creating visually impactful scroll
                  animations without unnecessary complexity.
                </p>
              </div>
              <div className="rounded-lg shadow-md h-max mx-auto max-w-lg bg-white p-4 md:p-6">
                <div className="text-[#577D86] pb-4 mb-4 border-b text-2xl font-semibold capitalize">
                  Customizable and Flexible
                </div>
                <div className="w-full flex justify-center mb-4">
                  <Icon
                    icon="fluent:code-text-edit-20-regular"
                    className="text-slate-500 text-4xl"
                  />
                </div>
                <p className="font-light text-slate-500 text-lg">
                  Scrollery provides a wide range of customization options,
                  empowering you to tailor the image animations to suit your
                  project&rsquo;s specific requirements. Adjust animation
                  timings, effects, transitions, and more to create personalized
                  and immersive experiences that perfectly align with your
                  design vision.
                </p>
              </div>
            </StackedCardWrapper>
          </div>
        </div>

        <div className="bg-[#577D86] relative p-4 md:p-8">
          <h2 className="!text-2xl md:!text-4xl font-light sticky top-[100px] text-slate-50 capitalize">
            Start creating
          </h2>

          <div className="flex gap-4 items-start flex-wrap justify-center my-20">
            <div className="flex flex-col items-start md:items-end gap-4 flex-wrap w-full md:w-max">
              <button
                className="bg-[#569DAA] p-2 text-lg rounded-md text-white flex gap-2 items-center"
                onClick={() => {
                  setIsLoading(true);
                  push("/overview");
                }}
              >
                Get started
                <Icon
                  icon="gg:scroll-h"
                  className={`text-2xl ${isLoading ? "animate-spin" : ""}`}
                />
              </button>

              <button
                className="ring-2 ring-slate-50 p-2 text-lg rounded-md text-slate-50 shrink flex flex-nowrap gap-2 items-center"
                onClick={() => {
                  onCopy();
                }}
              >
                <span className="truncate max-w-[200px]">
                  yarn add @nguyend-nam/scrollery-ts
                </span>
                {hasCopied ? (
                  <Icon
                    icon="fluent:checkbox-checked-16-regular"
                    className="text-2xl"
                  />
                ) : (
                  <Icon icon="fluent:copy-24-regular" className="text-2xl" />
                )}
              </button>
            </div>
            {/* <div className="flex-1 flex gap-4"> */}
            <div className="max-w-lg font-light text-lg text-slate-100">
              Whether you have ideas for new features, want to report bugs, or
              are interested in improving the library&rsquo;s functionality,
              your contributions are highly valued. Visit our GitHub repository
              at{" "}
              <a
                href="https://github.com/nguyend-nam/scrollery"
                target="_blank"
                className="font-normal border-b"
              >
                https://github.com/nguyend-nam/scrollery
              </a>{" "}
              to get involved and contribute to the project.
            </div>
            {/* </div> */}
          </div>
        </div>

        <footer className="relative px-4 md:px-6 py-8 md:py-12 bg-slate-100 w-full text-slate-600">
          <div>
            View on:{" "}
            <a
              href="https://www.npmjs.com/package/@nguyend-nam/scrollery-ts"
              target="_blank"
              className="text-[#577D86] font-medium"
            >
              NPM
            </a>
            {` • `}
            <a
              href="https://github.com/nguyend-nam/scrollery"
              target="_blank"
              className="text-[#577D86] font-medium"
            >
              GitHub
            </a>
          </div>
          <div>
            <a href="https://choosealicense.com/licenses/isc/" target="_blank">
              ISC
            </a>{" "}
            ©{" "}
            <a
              href="https://github.com/nguyend-nam"
              target="_blank"
              className="text-[#577D86] font-medium"
            >
              Nam Nguyen Dinh
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
