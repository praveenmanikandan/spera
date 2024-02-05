export default function Contact({ scrollToRef }) {
  return (
    <>
      <div className="mt-[5vh] mx-[3vh] md:w-[50vw] lg:w-[50vw] md:ml-[10vh] lg:ml-[10vh]">
        <p className="text-4xl uppercase text-primary font-anton md:text-6xl lg:text:6xl ">
          Now, we are on the lookout for visionaires like you to join the ride.
        </p>
        <p className="mt-6 text-xl font-poppins md:text-4xl lg:text-4xl md:mt-8 lg:mt-8">
          {" "}
          Can we steal 30 minutes of your time for a quick chat?
        </p>
      </div>

      <div
        className="flex flex-row px-[2vw] md:px-[5vw] lg:px-[5vw] mt-4 md:mt-[5vh] lg:mt-[5vh]"
        ref={scrollToRef}
      >
        <a href={`mailto:ceo@spera.pro`}>
          <div className="w-[45vw] bg-secondary flex flex-row px-2 py-1 rounded-[5vw] md:pl-[5vw] lg:pl-[5vw] md:pr-[2vw] lg:pr-[2vw] md:py-[1vw] lg:py-[1vw]">
            <div className="flex flex-col justify-center">
              <p className="text-sm  text-primary font-anton uppercase  ml-[1vh] md:text-4xl lg:text-6xl">
                Mail Us
              </p>
              <p className="text-[6px] font-poppins ml-[1vh] md:text-[1vw] lg:text-[1vw]">
                ceo@spera.pro
              </p>
            </div>
            <div className="h-[8vw] bg-primary w-[8vw] rounded-full ml-auto flex justify-center items-center">
              <img
                src="./images/mail.svg"
                className="h-[4vw] w-[4vw] text-gray-800 dark:text-white"
              />
            </div>
          </div>
        </a>
        <a href="https://linkedin.com/in/praveenmanikandan">
          <div className="w-[45vw] bg-secondary flex flex-row px-2 py-1 rounded-[5vw] md:pl-[5vw] lg:pl-[5vw] md:pr-[2vw] lg:pr-[2vw] md:py-[1vw] lg:py-[1vw] ml-[3vw]">
            <div className="flex flex-col justify-center">
              <p className="text-sm  text-primary font-anton uppercase  ml-[1vh] md:text-4xl lg:text-6xl">
                LinkedIn
              </p>
              <p className="text-[6px] font-poppins ml-[1vh] md:text-[1vw] lg:text-[1vw]">
                @praveenmanikandan
              </p>
            </div>
            <div className="h-[8vw] bg-primary w-[8vw] rounded-full ml-auto flex justify-center items-center">
              <svg
                class="h-[4vw] w-[4vw] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
              </svg>
            </div>
          </div>
        </a>
      </div>

      <div className="w-full mt-8 bg-primary md:mt-[10vh] lg:mt-[10vh]">
        <div className="flex flex-row overflow-hidden">
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
          <p className="uppercase font-anton text-secondary leading-[20px] text-xl md:text-4xl lg:text-6xl">
            “Spero
            <br /> Spera”
          </p>
        </div>
      </div>
      <div className="w-full py-1 bg-secondary">
        <p className="text-[8px] font-bold text-center font-poppins md:text-2xl lg:text-2xl">
          Italian for “As long as I breathe, there is hope”
        </p>
      </div>
    </>
  );
}
