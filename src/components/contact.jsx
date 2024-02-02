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
        <a href={`mailto:praveenmanikandan2000@gmail.com`}>
          <div className="w-[45vw] bg-secondary flex flex-row px-2 py-1 rounded-[5vw] md:pl-[5vw] lg:pl-[5vw] md:pr-[2vw] lg:pr-[2vw] md:py-[1vw] lg:py-[1vw]">
            <div className="flex flex-col justify-center">
              <p className="text-sm  text-primary font-anton uppercase  ml-[1vh] md:text-4xl lg:text-6xl">
                Mail Us
              </p>
              <p className="text-[6px] font-poppins ml-[1vh] md:text-[1vw] lg:text-[1vw]">
                praveenmanikandan2000@gmail.com
              </p>
            </div>
            <div className="h-[8vw] bg-primary w-[8vw] rounded-full ml-auto" />
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
            <div className="h-[8vw] bg-primary w-[8vw] rounded-full ml-auto" />
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
