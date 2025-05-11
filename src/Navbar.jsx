const Navbar = () => {
  const scrollStoryIntoView = () => {
    const story = document.querySelector("#our-story");
    story.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollFeaturesIntoView = () => {
    const story = document.querySelector("#features");
    story.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-primary lg:bg-transparent px-2 z-10 md:px-8 lg:static">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img
          src="logos\degenzTransparent.png"
          className="w-24 h-auto md:w-32 aspect-w-1 aspect-h-1 lg:w-36 2xl:w-48"
          alt=""
        />
        <div className="flex text-white items-center justify-between md:w-[370px] font-spaceMono font-semibold lg:w-[450px] 2xl:min-w-[550px]">
          <a
            className="hidden md:block 2xl:text-xl cursor-pointer"
            onClick={scrollStoryIntoView}
          >
            Our Story
          </a>
          <a
            className="hidden md:block 2xl:text-xl cursor-pointer"
            onClick={scrollFeaturesIntoView}
          >
            Features
          </a>
          <a
            className="nav-btn px-8 py-3 bg-white text-black rounded-xl font-spaceMono font-bold text-sm md:text-base"
            href="https://discord.gg/vvg7NdN7tu"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

<p></p>;
