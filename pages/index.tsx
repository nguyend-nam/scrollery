import { LinearlyScaledWrapper } from "../components/LinearlyScaledWrapper";
import { ParallaxWrapper } from "../components/ParallaxWrapper";
import { StackedWrapper } from "../components/StackedWrapper";
import { Logo } from "../public/Logo";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useClipboard } from "@dwarvesf/react-hooks";
import Image from "next/legacy/image";
import cx from "classnames";
import {
  featuresMedias,
  featuresSummary,
  keyFeatures,
  teamMems,
} from "../constants";

export default function Home() {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { onCopy, hasCopied } = useClipboard(
    "yarn add @nguyend-nam/scrollery-ts"
  );
  const [visibleAmount, setVisibleAmount] = useState(1);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      setIsSafari(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Scrollery</title>
      </Head>
      <div>
        <header className="fixed flex top-0 z-20 bg-white w-screen h-[65px] px-6 text-v2-green-dark font-bold border-b border-slate-200 justify-center">
          <div className="max-w-full w-[calc(90rem-48px)] flex gap-2 justify-between items-center">
            <div className="flex gap-2 items-center text-xl">
              {isSafari ? (
                <div className="h-9 w-9 relative overflow-hidden">
                  <Image
                    layout="fill"
                    src="/logo.png"
                    alt="/logo.png"
                    className="object-cover absolute"
                  />
                </div>
              ) : (
                <Logo width={36} height={36} />
              )}
              Scrollery
            </div>

            <div className="flex items-center gap-2">
              <button
                className="py-2 px-3 max-w-full rounded-lg bg-[rgba(0,0,0,.05)] shrink flex flex-nowrap gap-2 items-center"
                onClick={() => {
                  push("/introduction");
                }}
              >
                <span className="truncate w-full text-sm font-normal text-slate-500 leading-[1.25]">
                  Docs
                </span>
              </button>

              <a
                href="https://github.com/nguyend-nam/scrollery"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <Icon icon="cib:github" className="text-[24px] text-black" />
              </a>
            </div>
          </div>
        </header>
        <div
          className="flex justify-between md:bg-top overflow-hidden bg-right-top items-start md:items-center top-0 min-h-screen bg-slate-100 pt-[65px] gap-24"
          style={{
            backgroundImage: "url(banner.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: isSafari ? "static" : "sticky",
          }}
        >
          <div className="bg-white/75 px-6 md:px-8 pt-4 md:pt-8 !pb-0 w-full h-[calc(100vh-65px)] gap-14 md:gap-24 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <h2 className="!text-4xl md:!text-5xl text-slate-500 max-w-xl">
                <span className="font-bold bg-gradient-to-l from-v2-blue-dark via-v2-green-dark to-v2-green-normal !bg-clip-text text-transparent">
                  Empowers developers to effortlessly animate contents on
                  scroll.
                </span>
              </h2>

              <ul className="pl-[18px] list-disc !my-4 md:!my-5 max-w-full w-full md:w-max">
                {featuresSummary.map((sum) => (
                  <li
                    className="!text-lg md:!text-xl text-word-main"
                    key={sum.feature}
                  >
                    {sum.feature}{" "}
                    <span className="!text-xl md:!text-2xl font-semibold capitalize bg-gradient-to-l from-v2-green-extraDark via-v2-green-extraDark to-v2-green-normal !bg-clip-text text-transparent">
                      {sum.action}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 flex-wrap max-w-full">
                <button
                  className="bg-gradient-to-r from-v2-green-dark to to-v2-green-normal p-2 text-lg rounded-md text-white flex gap-2 items-center"
                  onClick={() => {
                    setIsLoading(true);
                    push("/introduction");
                  }}
                >
                  Get started
                  <span className="w-6">
                    <Icon
                      icon="gg:scroll-h"
                      className={`text-2xl ${isLoading ? "animate-spin" : ""}`}
                    />
                  </span>
                </button>

                <button
                  className="ring-2 ring-v2-blue-dark max-w-full p-2 text-lg rounded-md text-v2-blue-dark shrink flex flex-nowrap gap-2 items-center"
                  onClick={() => {
                    onCopy();
                  }}
                >
                  <span className="truncate w-full">
                    yarn add @nguyend-nam/scrollery-ts
                  </span>
                  <span className="w-6">
                    {hasCopied ? (
                      <Icon
                        icon="fluent:checkbox-checked-16-regular"
                        className="text-2xl"
                      />
                    ) : (
                      <Icon
                        icon="fluent:copy-24-regular"
                        className="text-2xl"
                      />
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full md:w-full flex-1 flex justify-center">
              <div className="w-full h-full md:w-3/5 relative rounded-t-lg overflow-hidden ring ring-v2-purple-dark">
                <Image
                  layout="fill"
                  src="/doc-component-preview.png"
                  alt="doc-component-preview"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {!isSafari ? (
          <div className="relative w-full h-[calc(100vh/5)] bg-gradient-to-b from-white/0 to-white" />
        ) : null}

        <div className="relative bg-white">
          <div className="p-6 md:p-8 pt-4 md:pt-8">
            <div
              className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-left bg-cover pointer-events-none"
              style={{ backgroundImage: `url(/ffflurry-bg.svg)` }}
            />

            <div className="absolute bottom-0 right-0 w-full h-[100px] bg-gradient-to-b from-white/0 to-white" />

            <h2 className="!text-xl md:!text-2xl sticky top-[85px] md:top-[101px] text-word-light">
              our
              <br />
              <span className="!text-3xl md:!text-4xl font-bold capitalize bg-gradient-to-l from-v2-green-extraDark via-v2-green-extraDark to-v2-green-normal !bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
            <LinearlyScaledWrapper
              className="w-full flex flex-col items-center gap-[800px] !my-20 !h-[1330px]"
              from={120}
              to={500}
              itemClassName="!w-[500px] max-w-screen"
            >
              <div className="rounded-md relative overflow-hidden h-full p-4 md:p-6 bg-v2-green-dark">
                <p className="text-lg leading-9 text-white">
                  <span className="font-medium border-b">Our vision</span> is to
                  provide a comprehensive set of tools and components
                  specifically designed to enhance the visual experience of
                  images and bring them to life with captivating scroll
                  animations. <br /> With Scrollery, you can create{" "}
                  <span className="font-medium border-b">stunning</span>,{" "}
                  <span className="font-medium border-b">interactive</span>, and{" "}
                  <span className="font-medium border-b">engaging</span> image
                  animations that leave a lasting impression on your users.
                </p>
                <div className="absolute bottom-0 py-4 md:py-6 left-0 !w-full flex justify-center bg-gradient-to-b from-white/0 to-v2-green-dark">
                  <div className="bg-white p-2 rounded-full flex justify-center items-center">
                    <Icon
                      icon="iconoir:transition-down"
                      className="!text-v2-green-dark text-2xl"
                    />
                  </div>
                </div>
              </div>
            </LinearlyScaledWrapper>
          </div>
        </div>

        <div className="relative bg-v2-purple-dark">
          <div className="relative p-6 md:p-8 pt-4 md:pt-8">
            {/* images bg */}
            <div className="absolute top-0 right-0 h-full w-full bg-white md:w-[calc(100vw/3.5)] opacity-10 md:opacity-100">
              <div className="sticky top-0 right-0 w-full h-screen">
                {featuresMedias.map((media) => (
                  <div
                    key={media.id}
                    className={cx(
                      "w-full absolute h-full bg-center bg-cover pointer-events-none transition-all duration-200",
                      {
                        "opacity-100": visibleAmount === media.id,
                        "opacity-0": visibleAmount !== media.id,
                      }
                    )}
                    style={{
                      backgroundImage: `url(${media.img})`,
                    }}
                  />
                ))}
              </div>
            </div>
            {/* icons bg */}
            <div className="absolute top-0 right-0 h-full w-[calc(100vw/3.5)] hidden md:block">
              <div className="sticky top-0 right-0 w-full p-4 h-screen pointer-events-none flex justify-end items-end">
                {featuresMedias.map((media) => (
                  <Icon
                    key={media.id}
                    icon={media.icon}
                    className={cx(
                      "text-[80px] absolute transition-all text-v2-green-normal",
                      {
                        "opacity-1": visibleAmount === media.id,
                        "opacity-0": visibleAmount !== media.id,
                      }
                    )}
                  />
                ))}
              </div>
            </div>
            <h2 className="!text-xl md:!text-2xl sticky top-[85px] md:top-[101px] text-slate-50">
              key
              <br />
              <span
                className="!text-3xl md:!text-4xl font-bold capitalize text-v2-green-normal"
                style={{ transition: "color 0.4s" }}
              >
                Features
              </span>
            </h2>
            <StackedWrapper
              className="w-full md:w-[calc(100vw*2.5/3.5-64px)] left-0 md:right-4 space-y-[800px] !my-20 md:!mb-[calc(100vh/4)]"
              itemClassName="!h-max !top-[calc(100vh/4)]"
              itemStyle={{ transition: "0.25s" }}
              getCurrentVisibleItems={setVisibleAmount}
              transitionDebounce={0.15}
            >
              {keyFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="rounded-lg h-max mx-auto max-w-lg bg-white p-4 md:p-6 border"
                >
                  <div className="text-word-main pb-4 mb-4 border-b text-xl md:text-2xl font-semibold">
                    {feature.title}
                  </div>
                  <div className="w-full flex justify-center mb-4">
                    <Icon
                      icon={featuresMedias[index].icon}
                      className="text-word-main text-4xl"
                    />
                  </div>
                  <p className="text-word-light text-lg">
                    {feature.description}
                  </p>
                  <a
                    href={featuresMedias[index].url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-word-light text-sm"
                  >
                    <i>[Image]</i>
                  </a>
                </div>
              ))}
            </StackedWrapper>
          </div>
        </div>

        <div className="bg-white relative p-0 md:p-8 pt-4 md:pt-8 min-h-[calc(100vh/1.2)] flex flex-col">
          <h2 className="!text-xl md:!text-2xl px-6 md:px-0 sticky top-[85px] md:top-[101px] text-word-light">
            meet the
            <br />
            <span className="!text-3xl md:!text-4xl font-bold capitalize bg-gradient-to-l from-v2-green-extraDark via-v2-green-extraDark to-v2-green-normal !bg-clip-text text-transparent">
              Team
            </span>
          </h2>

          <div className="flex flex-col py-4 md:py-0 gap-4 relative h-full z-10">
            {teamMems.map((mem, i) => (
              <div
                className={cx(
                  "flex items-center justify-center gap-4 flex-wrap",
                  {
                    "flex-row-reverse": i % 2 === 1,
                  }
                )}
                key={mem.img}
              >
                <ParallaxWrapper layer={2}>
                  <div className="h-[180px] w-40 md:h-[200px] md:w-48 relative rounded overflow-hidden bg-slate-200">
                    <Image
                      layout="fill"
                      src={mem.img}
                      alt={mem.img}
                      className="object-cover absolute"
                    />
                  </div>
                </ParallaxWrapper>
                <div className="flex flex-col relative p-2 bg-v2-green-normal w-[160px] md:w-[300px] h-[180px] md:h-[200px]">
                  <div
                    className="absolute bottom-0 left-0 w-[120px] md:w-[170px] h-[120px] md:h-[170px] bg-left bg-cover pointer-events-none"
                    style={{ backgroundImage: `url(${mem.art})` }}
                  />

                  <ParallaxWrapper layer={2} className="relative p-2">
                    <div className="text-lg md:text-xl font-normal text-white">
                      {mem.fullName}
                    </div>
                  </ParallaxWrapper>

                  <ParallaxWrapper
                    layer={2}
                    className="absolute bottom-0 right-0"
                  >
                    <div className="flex">
                      <a
                        href={mem.gitHub}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-v2-green-light rounded-none"
                      >
                        <Icon
                          icon="cib:github"
                          className="text-2xl md:text-3xl text-v2-purple-dark"
                        />
                      </a>

                      <a
                        href={mem.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-v2-purple-dark rounded-none"
                      >
                        <Icon
                          icon="akar-icons:linkedin-fill"
                          className="text-2xl md:text-3xl text-v2-green-light"
                        />
                      </a>
                    </div>
                  </ParallaxWrapper>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-v2-green-dark relative p-6 md:p-8 pt-4 md:pt-8 min-h-[calc(100vh/1.2)] flex flex-col">
          <div
            className="absolute bottom-0 right-0 w-full h-full bg-left bg-cover pointer-events-none"
            style={{ backgroundImage: `url(/bgjar-create-bg.svg)` }}
          />
          <h2 className="!text-xl md:!text-2xl sticky top-[100px] text-slate-50">
            start
            <br />
            <span className="!text-3xl md:!text-4xl font-bold capitalize bg-gradient-to-r from-v2-green-dark via-v2-green-light to-v2-green-light !bg-clip-text text-transparent">
              Creating
            </span>
          </h2>

          <div className="flex flex-col mt-4 lg:flex-row gap-4 items-center flex-wrap flex-1 justify-center relative h-full z-10">
            <div className="flex flex-col items-start lg:items-end gap-4 flex-wrap w-full max-w-lg lg:w-max">
              <button
                className="bg-v2-green-extraDark p-2 text-lg rounded-md text-white flex gap-2 items-center"
                onClick={() => {
                  setIsLoading(true);
                  push("/introduction");
                }}
              >
                Get started
                <Icon
                  icon="gg:scroll-h"
                  className={`text-2xl ${isLoading ? "animate-spin" : ""}`}
                />
              </button>

              <button
                className="ring-2 ring-slate-50 p-2 max-w-full text-lg rounded-md bg-v2-green-dark text-slate-50 shrink flex flex-nowrap gap-2 items-center"
                onClick={() => {
                  onCopy();
                }}
              >
                <span className="truncate w-full">
                  yarn add @nguyend-nam/scrollery-ts
                </span>

                <span className="w-6">
                  {hasCopied ? (
                    <Icon
                      icon="fluent:checkbox-checked-16-regular"
                      className="text-2xl"
                    />
                  ) : (
                    <Icon icon="fluent:copy-24-regular" className="text-2xl" />
                  )}
                </span>
              </button>
            </div>
            <div className="max-w-lg text-lg text-slate-100">
              Whether you have ideas for new features, want to report bugs, or
              are interested in improving the library&rsquo;s functionality,
              your contributions are highly valued. Visit our GitHub repository
              at{" "}
              <a
                href="https://github.com/nguyend-nam/scrollery"
                target="_blank"
                rel="noreferrer"
                className="border-b rounded-none font-medium"
              >
                https://github.com/nguyend-nam/scrollery
              </a>{" "}
              to get involved and contribute to the project.
            </div>
          </div>
        </div>

        <footer className="relative text-center md:text-left px-6 md:px-8 py-12 bg-slate-100 w-full text-word-light">
          <div>
            View on:{" "}
            <a
              href="https://www.npmjs.com/package/@nguyend-nam/scrollery-ts"
              target="_blank"
              rel="noreferrer"
              className="text-v2-green-extraDark font-medium"
            >
              NPM
            </a>
            {` • `}
            <a
              href="https://github.com/nguyend-nam/scrollery"
              target="_blank"
              rel="noreferrer"
              className="text-v2-green-extraDark font-medium"
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
              className="text-v2-green-extraDark font-medium"
            >
              Nam Nguyen Dinh
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
