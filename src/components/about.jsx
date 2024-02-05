import { Parallax } from "react-scroll-parallax";

export default function About({ handleScroll }) {
  return (
    <>
      <div className="mt-[10vh]">
        <div className="md:w-[60vw] lg:w-[50vw] md:ml-[10vh] lg:ml-[10vh] ml-[3vh] w-[90vw]">
          <p className="md:text-6xl md:leading-[72px] lg:text-6xl lg:leading-[72px] text-primary font-anton uppercase leading-[40px] text-4xl">
            {/* Spera effortlessly navigates the crypto markets 24/7, */}
            Spera: Your Crypto Partner. Effortless Trading, Maximum Returns
          </p>
          <p className="text-xl md:text-4xl md:leading-[52px] lg:text-4xl lg:leading-[52px] text-primary font-poppins mt-[5vh]">
            securing high returns for your funds. Meanwhile, you get to focus on
            what truly matters – enjoying your time with loved ones and
            indulging in your passions.
          </p>

          <div
            className=" md:p-[2vh] lg:p-[2vh] p-[1vh] bg-secondary rounded-full flex row items-center mt-[5vh] cursor-pointer hover:bg-primary transition font-anton duration-500 hover:text-secondary text-primary "
            onClick={handleScroll}
          >
            <div className="">
              <p className="text-2xl tracking-[0.5px] md:text-5xl lg:text-5xl md:leading-[72px] lg:leading-[72px]font-anton uppercase md:ml-[32px] lg:ml-[32px] ml-[3vh]">
                Let's connect
              </p>
            </div>
            <div className="h-[8vh] bg-primary w-[8vh] rounded-full ml-auto flex justify-center items-center">
              <svg
                class="w-[5vh] h-[5vh] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
