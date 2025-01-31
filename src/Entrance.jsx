import TwitterIcon from "./assets/icons/x-twitter-brands-solid.svg?react";
import DiscordIcon from "./assets/icons/discord-brands-solid.svg?react";

const Entrance = () => {
  return (
    <div className="bg-secondary px-3 pt-14 pb-14 md:px-8 lg:py-20 lg:px-12">
      <div className="bg-white px-4 pt-10 pb-10 rounded-md md:pb-12 md:px-10 md:py-10 lg:py-8 lg:rounded-2xl">
        <h1 className="text-[1.75rem] font-barlow font-bold md:text-4xl md:pt-4 lg:text-left lg:text-2xl lg:pt-0 ">
          Membership Entrance
        </h1>
        <div className="flex pt-2 flex-col md:flex-row md:items-center md:gap-4 lg:flex-row lg:justify-center">
          <p className="font-barlow pb-1.5 w-[280px] text-sm md:text-3xl md:w-[350px] md:pt-4 lg:text-left lg:text-xl lg:w-full lg:pt-0">
            Looking to join our community? Entry into DegenZ is free and open to
            everbody!
          </p>
          <div className="flex flex-col pt-8 gap-y-4 md:items-center md:gap-y-4 lg:flex-row lg:gap-8 lg:pt-0">
            <button className="bg-black flex w-full py-1 items-center rounded md:px-8 md:py-2 md:rounded-xl whitespace-nowrap lg:px-4 lg:py-0.5">
              <div className="bg-white w-8 rounded ml-4 mr-2.5 my-2 md:w-10 md:mr-4 md:ml-0 lg:w-7 lg:mr-2">
                <TwitterIcon className="w-full h-auto object-cover p-0.5" />
              </div>
              <p className="text-white font-spaceMono md:text-xl lg:text-sm">
                Follow on X
              </p>
            </button>

            <button className="bg-primary flex w-full py-1 items-center rounded md:px-8 md:py-2 md:rounded-xl whitespace-nowrap lg:px-4 lg:py-0.5">
              <div className="bg-white w-8 rounded ml-4 mr-2.5 my-2 md:w-10 md:mr-4 md:ml-0 lg:w-7 h-7 lg:mr-2">
                <DiscordIcon className="w-full fill-primary h-auto object-cover p-0.5 lg:mt-0.5" />
              </div>
              <p className="text-white font-spaceMono md:text-xl lg:text-sm">
                Join Discord
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entrance;
