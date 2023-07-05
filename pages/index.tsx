import { LinearlyScaledCardWrapper } from "../components/LinearlyScaledCardWrapper";
import { StackedCardWrapper } from "../components/StackedCardWrapper";
import { Logo } from "../components/Logo";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Head from "next/head";
import { useClipboard } from "@dwarvesf/react-hooks";
import Image from "next/image";
import cx from "classnames";

export default function Home() {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { onCopy, hasCopied } = useClipboard(
    "yarn add @nguyend-nam/scrollery-ts"
  );
  const [visibleAmount, setVisibleAmount] = useState(1);

  return (
    <>
      <Head>
        <title>Scrollery</title>
      </Head>
      <div>
        <header className="fixed flex items-center gap-2 top-0 z-20 bg-white w-screen p-4 px-6 text-[#569DAA] font-semibold border-b border-slate-200 justify-between">
          <div className="flex gap-2 items-center text-xl">
            <Logo width={36} height={36} />
            Scrollery
          </div>

          <button
            className="ring-slate-400 py-0.5 max-w-full rounded-md text-slate-500 shrink flex flex-nowrap gap-2 items-center"
            onClick={() => {
              push("/overview");
            }}
          >
            <span className="truncate w-full font-normal">Docs</span>
          </button>
        </header>
        <div
          className="flex justify-start items-start md:items-center sticky top-0 min-h-screen bg-slate-100 pt-[86px] md:pt-4 pb-4 px-4 md:px-32"
          style={{
            backgroundImage: "url(thumb.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-md border border-slate-200 max-w-full md:max-w-2xl space-y-2">
            <h2 className="!text-2xl md:!text-4xl font-light md:font-extralight text-slate-500">
              enhanced{" "}
              <span className="font-bold capitalize bg-gradient-to-l from-[#477076] via-[#477076] to-[#32C4C0] !bg-clip-text text-transparent">
                visual experience
              </span>
            </h2>

            <h2 className="!text-2xl md:!text-4xl font-light md:font-extralight text-slate-500">
              interactive{" "}
              <span className="font-bold capitalize bg-gradient-to-l from-[#477076] via-[#477076] to-[#32C4C0] !bg-clip-text text-transparent">
                image animations
              </span>
            </h2>

            <h2 className="!text-2xl md:!text-4xl font-light md:font-extralight text-slate-500">
              simple{" "}
              <span className="font-bold capitalize bg-gradient-to-l from-[#477076] via-[#477076] to-[#32C4C0] !bg-clip-text text-transparent">
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
                className="ring-2 ring-[#569DAA] max-w-full p-2 text-lg rounded-md text-[#569DAA] shrink flex flex-nowrap gap-2 items-center"
                onClick={() => {
                  onCopy();
                }}
              >
                <span className="truncate w-full">
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

        <div className="relative bg-white">
          <div className="p-4 md:p-8">
            <div
              className="absolute hidden md:block top-0 right-0 w-2/3 h-full bg-left bg-cover pointer-events-none"
              style={{ backgroundImage: `url(/bgjar-vision-bg.svg)` }}
            />

            <div className="absolute bottom-0 right-0 w-full h-[100px] bg-gradient-to-b from-white/0 to-white" />

            <h2 className="!text-3xl md:!text-4xl font-light md:font-extralight sticky top-[100px] text-slate-500">
              our
              <br />
              <span className="font-bold capitalize bg-gradient-to-l from-[#477076] via-[#477076] to-[#32C4C0] !bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
            <LinearlyScaledCardWrapper
              className="w-full flex flex-col items-center gap-[800px] !my-20 !h-[1330px]"
              from={120}
              to={500}
              itemClassName="!w-[500px] max-w-screen"
            >
              <div className="rounded-md relative overflow-hidden h-full p-4 md:p-6 bg-[#569DAA] border border-slate-200">
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
        </div>

        <div className="relative bg-white">
          <div className="relative p-4 md:p-8">
            {/* left bg */}
            <div
              className={cx("absolute top-0 left-0 h-full w-full md:w-1/2", {
                "bg-[#32C4C0]": visibleAmount === 1,
                "bg-blue-400": visibleAmount === 2,
                "bg-amber-400": visibleAmount === 3,
              })}
              style={{ transition: "background-color 0.4s" }}
            >
              <div
                className="sticky top-0 right-0 w-full h-screen bg-center bg-cover pointer-events-none"
                style={{
                  ...(visibleAmount === 1
                    ? { backgroundImage: `url(/bgjar-feature-1.svg)` }
                    : null),
                  ...(visibleAmount === 2
                    ? { backgroundImage: `url(/bgjar-feature-2.svg)` }
                    : null),
                  ...(visibleAmount === 3
                    ? { backgroundImage: `url(/bgjar-feature-3.svg)` }
                    : null),
                  transition: "background-image 0.4s",
                }}
              />
            </div>
            {/* right bg */}
            <div
              className="absolute top-0 right-0 h-full w-1/2 hidden md:block"
              style={{ transition: "background-color 0.4s" }}
            >
              <div className="sticky top-0 right-0 w-full h-screen pointer-events-none flex justify-center items-center">
                <Icon
                  icon="fluent:hand-draw-28-regular"
                  className={cx(
                    "text-[#32C4C0] text-[140px] absolute transition-all delay-400",
                    {
                      "opacity-1": visibleAmount === 1,
                      "opacity-0": visibleAmount !== 1,
                    }
                  )}
                />
                <Icon
                  icon="fluent:target-arrow-20-regular"
                  className={cx(
                    "text-blue-400 text-[140px] absolute transition-all delay-400",
                    {
                      "opacity-1": visibleAmount === 2,
                      "opacity-0": visibleAmount !== 2,
                    }
                  )}
                />
                <Icon
                  icon="fluent:code-text-edit-20-regular"
                  className={cx(
                    "text-amber-400 text-[140px] absolute transition-all delay-400",
                    {
                      "opacity-1": visibleAmount === 3,
                      "opacity-0": visibleAmount !== 3,
                    }
                  )}
                />
              </div>
            </div>
            <h2 className="!text-3xl md:!text-4xl font-light md:font-extralight sticky top-[100px] text-slate-50">
              key
              <br />
              <span
                className={cx("font-bold capitalize", {
                  "text-[#477076]": visibleAmount === 1,
                  "text-blue-800": visibleAmount === 2,
                  "text-amber-800": visibleAmount === 3,
                })}
                style={{ transition: "color 0.4s" }}
              >
                Features
              </span>
            </h2>
            <StackedCardWrapper
              className="w-full space-y-[800px] !my-20 !mb-[200px]"
              itemClassName="!h-max !top-[180px]"
              getCurrentVisibleItems={setVisibleAmount}
            >
              <div className="rounded-lg shadow-md h-max mx-auto max-w-lg bg-white p-4 md:p-6">
                <div className="text-slate-600 pb-4 mb-4 border-b text-2xl font-semibold">
                  Visual Experience Enhancement
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
                <div className="text-slate-600 pb-4 mb-4 border-b text-2xl font-semibold">
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
                <div className="text-slate-600 pb-4 mb-4 border-b text-2xl font-semibold">
                  Customization and Flexibility
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

        <div className="bg-slate-50 relative p-4 md:p-8 min-h-[calc(100vh/1.2)] flex flex-col">
          <h2 className="!text-3xl md:!text-4xl font-light md:font-extralight sticky top-[100px] text-slate-500">
            meet the
            <br />
            <span className="font-bold capitalize bg-gradient-to-l from-[#477076] via-[#477076] to-[#32C4C0] !bg-clip-text text-transparent">
              Team
            </span>
          </h2>

          <div className="flex py-4 md:py-0 gap-4 md:gap-20 items-center flex-wrap flex-1 justify-center relative h-full z-10">
            <div className="flex flex-col items-center">
              <div className="h-40 w-40 md:h-48 md:w-48 relative rounded-lg overflow-hidden">
                <Image
                  layout="fill"
                  src="/namnd.jpg"
                  alt="namnd"
                  className="object-cover absolute"
                />
              </div>
              <div className="flex flex-col w-full items-center pt-4 gap-1 md:gap-2 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-50/0">
                <div className="text-base md:text-xl font-light text-slate-700">
                  Nam Nguyen Dinh
                </div>
                <div className="flex gap-1 md:gap-2">
                  <a
                    href="https://github.com/nguyend-nam"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-full bg-slate-50"
                  >
                    <Icon
                      icon="openmoji:github"
                      className="text-3xl md:text-4xl"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nguyendinhnam0320/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-full bg-slate-50"
                  >
                    <Icon
                      icon="openmoji:linkedin"
                      className="text-3xl md:text-4xl"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-40 w-40 md:h-48 md:w-48 relative rounded-lg overflow-hidden">
                <Image
                  layout="fill"
                  src="/lapnn.jpeg"
                  alt="lapnn"
                  className="object-cover absolute"
                />
              </div>
              <div className="flex flex-col w-full items-center pt-4 gap-1 md:gap-2 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-50/0">
                <div className="text-base md:text-xl font-light text-slate-700">
                  Lap Nguyen Ngo
                </div>
                <div className="flex gap-1 md:gap-2">
                  <a
                    href="https://github.com/ngolapnguyen"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-full bg-slate-50"
                  >
                    <Icon
                      icon="openmoji:github"
                      className="text-3xl md:text-4xl"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ngo-lap-nguyen/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-full bg-slate-50"
                  >
                    <Icon
                      icon="openmoji:linkedin"
                      className="text-3xl md:text-4xl"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#569DAA] relative p-4 md:p-8 min-h-[calc(100vh/1.2)] flex flex-col">
          <div
            className="absolute bottom-0 right-0 w-full h-full bg-left bg-cover pointer-events-none"
            style={{ backgroundImage: `url(/bgjar-create-bg.svg)` }}
          />
          <h2 className="!text-3xl md:!text-4xl font-light md:font-extralight sticky top-[100px] text-slate-50">
            start
            <br />
            <span className="font-bold capitalize bg-gradient-to-r from-[#569DAA] via-[#A5F1E9] to-[#A5F1E9] !bg-clip-text text-transparent">
              Creating
            </span>
          </h2>

          <div className="flex flex-col mt-4 lg:flex-row gap-4 items-center flex-wrap flex-1 justify-center relative h-full z-10">
            <div className="flex flex-col items-start lg:items-end gap-4 flex-wrap w-full max-w-lg lg:w-max">
              <button
                className="bg-[#477076] p-2 text-lg rounded-md text-white flex gap-2 items-center"
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
                className="ring-2 ring-slate-50 p-2 max-w-full text-lg rounded-md bg-[#569DAA] text-slate-50 shrink flex flex-nowrap gap-2 items-center"
                onClick={() => {
                  onCopy();
                }}
              >
                <span className="truncate w-full">
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
            <div className="max-w-lg font-light text-lg text-slate-100">
              Whether you have ideas for new features, want to report bugs, or
              are interested in improving the library&rsquo;s functionality,
              your contributions are highly valued. Visit our GitHub repository
              at{" "}
              <a
                href="https://github.com/nguyend-nam/scrollery"
                target="_blank"
                rel="noreferrer"
                className="font-normal border-b rounded-none"
              >
                https://github.com/nguyend-nam/scrollery
              </a>{" "}
              to get involved and contribute to the project.
            </div>
          </div>
        </div>

        <footer className="relative px-4 md:px-6 py-12 bg-slate-100 w-full text-slate-600">
          <div>
            View on:{" "}
            <a
              href="https://www.npmjs.com/package/@nguyend-nam/scrollery-ts"
              target="_blank"
              rel="noreferrer"
              className="text-[#477076] font-medium"
            >
              NPM
            </a>
            {` • `}
            <a
              href="https://github.com/nguyend-nam/scrollery"
              target="_blank"
              rel="noreferrer"
              className="text-[#477076] font-medium"
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              href="https://choosealicense.com/licenses/isc/"
              target="_blank"
              rel="noreferrer"
            >
              ISC
            </a>{" "}
            ©{" "}
            <a
              href="https://github.com/nguyend-nam"
              target="_blank"
              rel="noreferrer"
              className="text-[#477076] font-medium"
            >
              Nam Nguyen Dinh
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
