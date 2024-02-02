import { Parallax, useParallax } from "react-scroll-parallax";

export default function Caption() {
  return (
    <>
      <div className="hidden md:block lg:block mt-[50vh]">
        <Parallax translateY={["100px", "-100px"]} scale={[1.5, 0.5]}>
          <div className="flex flex-col items-center my-28">
            <p className=" text-primary text-8xl font-anton">"Spero Spera"</p>
            <p className="mt-4 text-4xl text-primary font-poppins">
              {" "}
              Italian for "As long as I breathe, there is hope"
            </p>
          </div>
        </Parallax>

        <Parallax scale={[0.5, 1]}>
          <div className="bg-secondary w-[450px] h-[450px] rounded-full absolute -top-[120px] -right-[120px]" />
        </Parallax>
      </div>

      <div className="block md:hidden lg:hidden mt-[25vh]">
        <Parallax translateY={["80px", "-80px"]} scale={[1, 0.5]}>
          <div className="flex flex-col my-28">
            <p className="text-primary text-8xl font-anton">"Spero Spera"</p>
            <p className="mt-4 text-4xl text-primary font-poppins">
              {" "}
              Italian for "As long as I breathe, there is hope"
            </p>
          </div>
        </Parallax>

        <Parallax scale={[0.5, 1]}>
          <div className="bg-secondary w-[450px] h-[450px] rounded-full absolute -top-[30vh] -right-[120px]" />
        </Parallax>
      </div>
    </>
  );
}
