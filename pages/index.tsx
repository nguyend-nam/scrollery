import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { LinearlyScaledCardWrapper } from "../components/LinearlyScaledCardWrapper";
import { RotateCardWrapper } from "../components/RotateCardWrapper";
import { StackedCardWrapper } from "../components/StackedCardWrapper";
import { Layout } from "../components/Layout";
import { Logo } from "../components/Logo";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();
  return (
    <div>
      <header className="fixed flex items-center gap-2 top-0 z-10 bg-white w-screen p-4 px-6 text-[#577D86] font-semibold shadow-md text-xl">
        <Logo width={36} height={36} />
        Scrollery
      </header>
      <div
        className="flex justify-start items-end md:items-center sticky top-0 min-h-screen bg-slate-100 py-4 px-4 md:px-40"
        style={{
          backgroundImage: "url(thumb.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-md shadow-md max-w-2xl space-y-2">
          <h2 className="!text-2xl md:!text-4xl font-extralight text-slate-500">
            enhanced{" "}
            <span className="font-bold capitalize bg-gradient-to-l from-[#577D86] via-[#577D86] to-[#87CBB9] !bg-clip-text text-transparent">
              visual experience
            </span>
          </h2>

          <h2 className="!text-2xl md:!text-4xl font-extralight text-slate-500">
            interactive{" "}
            <span className="font-bold capitalize bg-gradient-to-l from-[#577D86] via-[#577D86] to-[#87CBB9] !bg-clip-text text-transparent">
              image animations
            </span>
          </h2>

          <h2 className="!text-2xl md:!text-4xl font-extralight text-slate-500">
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

          <button
            className="bg-[#569DAA] p-2 text-xl rounded-md text-white"
            onClick={() => push("/overview")}
          >
            Get started
          </button>
        </div>
      </div>

      <div className="relative w-full min-h-[calc(100vh/1.5)] bg-gradient-to-b from-white/0 via-white/5 to-white" />

      <div className="relative bg-gradient-to-b from-white via-white to-[#87CBB9]">
        <div className="relative p-4 md:p-8">
          <h2 className="!text-2xl md:!text-4xl font-light sticky top-[100px] text-slate-500">
            Vision
          </h2>
          <LinearlyScaledCardWrapper
            className="w-full flex flex-col items-center gap-[800px] !mt-8 !mb-[200px]"
            from={120}
            to={500}
            itemClassName="!w-[500px] max-w-screen"
          >
            <div className="rounded-md overflow-hidden h-full p-4 md:p-6 bg-[#569DAA]">
              <p className="text-lg font-light leading-9 text-white">
                <span className="font-normal border-b">Our vision</span> is to
                provide a comprehensive set of tools and components specifically
                designed to enhance the visual experience of images and bring
                them to life with captivating scroll animations. <br /> With
                Scrollery, you can create{" "}
                <span className="font-normal border-b">stunning</span>,{" "}
                <span className="font-normal border-b">interactive</span>, and{" "}
                <span className="font-normal border-b">engaging</span> image
                animations that leave a lasting impression on your users.
              </p>
            </div>
          </LinearlyScaledCardWrapper>
        </div>

        <div className="relative p-4 md:p-8">
          <h2 className="!text-2xl md:!text-4xl font-light sticky top-[100px] text-slate-500">
            Key Features
          </h2>
          <StackedCardWrapper
            className="w-full space-y-[600px] !mt-8 !mb-[calc(100vh/3)]"
            itemClassName="!h-max !top-[180px]"
          >
            <div className="rounded-lg shadow-md h-max mx-auto max-w-lg bg-white p-4 md:p-6">
              <div className="text-[#577D86] pb-4 mb-4 border-b text-2xl font-semibold capitalize">
                Visual experience enhance
              </div>
              <p className="font-light text-slate-500 text-lg">
                Whether you&rsquo;re building a portfolio website, a creative
                landing page, or an interactive storytelling platform, Scrollify
                empowers you to effortlessly bring your designs to life with
                captivating scroll animations.
              </p>
            </div>
            <div className="rounded-lg shadow-md h-max mx-auto max-w-lg bg-white p-4 md:p-6">
              <div className="text-[#577D86] pb-4 mb-4 border-b text-2xl font-semibold capitalize">
                Simple Integration
              </div>
              <p className="font-light text-slate-500 text-lg">
                Scrollery offers a user-friendly and straightforward integration
                process, allowing you to easily animate images with minimal
                setup. Our library provides a set of intuitive components that
                seamlessly work with your existing codebase, enabling you to
                focus on creating visually impactful scroll animations without
                unnecessary complexity.
              </p>
            </div>
            <div className="rounded-lg shadow-md h-max mx-auto max-w-lg bg-white p-4 md:p-6">
              <div className="text-[#577D86] pb-4 mb-4 border-b text-2xl font-semibold capitalize">
                Customizable and Flexible
              </div>
              <p className="font-light text-slate-500 text-lg">
                Scrollery provides a wide range of customization options,
                empowering you to tailor the image animations to suit your
                project&rsquo;s specific requirements. Adjust animation timings,
                effects, transitions, and more to create personalized and
                immersive experiences that perfectly align with your design
                vision.
              </p>
            </div>
          </StackedCardWrapper>
        </div>
      </div>

      <footer className="relative px-4 md:px-6 py-8 md:py-12 bg-slate-100 w-full">
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
  );
}
