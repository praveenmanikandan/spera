export default function Navbar() {
  return (
    <div className="flex flex-row md:ml-[10vh] md:mt-[10vh] lg:ml-[10vh] lg:mt-[10vh] mt-[5vh] ml-[3vh]">
      <img
        src="images/LOGO.png"
        className="md:w-[10vh] md:h-[10vh] lg:w-[10vh] lg:h-[10vh] h-[5vh] w-[5vh]"
      />
      <img
        src="images/LOGOTYPE.png"
        className="md:w-[30vh] md:h-[10vh] lg:w-[30vh] lg:h-[10vh] ml-4 h-[5vh] w-[15vh]"
      />
    </div>
  );
}
