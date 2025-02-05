import TwitterIcon from "./assets/icons/x-twitter-brands-solid.svg?react";
import DiscordIcon from "./assets/icons/discord-brands-solid.svg?react";

const Entrance = () => {
  return (
    <div className="bg-secondary px-3 pt-14 pb-14 md:px-8 lg:py-20 lg:px-20 2xl:px-32">
      <div className="bg-white mx-auto max-w-7xl px-4 pt-10 pb-10 rounded-md md:pb-12 md:px-10 md:py-10 lg:py-8 lg:rounded-2xl">
        <h1 className="text-[1.75rem] text-gray-900 font-barlow font-bold md:text-4xl md:pt-4 lg:text-left lg:text-2xl lg:pt-0 xl:text-3xl 2xl:text-4xl">
          Membership Entrance
        </h1>
        <div className="flex pt-2 flex-col md:flex-row md:items-center md:gap-4 lg:gap-6 lg:flex-row lg:justify-center">
          <p className="font-barlow pb-1.5 w-[300px] text-gray-900 md:text-3xl md:w-[350px] md:pt-4 lg:text-left lg:text-xl lg:w-full lg:pt-0">
            Looking to join our community? Entry into DegenZ is free and open to
            everbody!
          </p>
          <div className="flex flex-col pt-8 gap-y-4 md:items-center md:gap-y-4 lg:flex-row lg:gap-x-6 xl:relative xl:bottom-1  lg:pt-0">
            <a href="https://x.com/_DegenZ">
            <button className="bg-black flex w-full py-1 items-center rounded md:px-8 md:py-2 md:rounded-xl whitespace-nowrap lg:px-5 lg:py-0.5 xl:px-7 xl:py-1.5 xl:rounded-xl">
              <div className="bg-white w-8 h-8 rounded ml-4 mr-2.5 my-2 md:w-10 md:h-10 md:mr-4 md:ml-0 lg:w-7 lg:h-7 lg:mr-2">
                <TwitterIcon className="w-full h-auto object-cover p-0.5" />
              </div>
              <p className="text-white font-spaceMono md:text-xl lg:text-sm 2xl:text-lg">
                Follow on X
              </p>
            </button>
            </a>

          <a href="">
          <button className="bg-primary flex w-full py-1 items-center rounded md:px-8 md:py-2 md:rounded-xl whitespace-nowrap lg:px-5 lg:py-0.5 xl:px-7 xl:py-1.5 xl:rounded-xl">
              <div className="bg-white w-8 h-8 rounded ml-4 mr-2.5 my-2 md:w-10 md:h-10 md:mr-4 md:ml-0 lg:w-7 lg:h-7 lg:mr-2 xl:rounded-small">
                <DiscordIcon className="w-full fill-primary mt-0.5 h-auto object-cover p-0.5 md:mt-1 lg:mt-0.5 2xl:mt-1" />
              </div>
              <p className="text-white font-spaceMono md:text-xl lg:text-sm 2xl:text-lg">
                Join Discord
              </p>
            </button>
          </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Entrance;
