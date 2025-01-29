import ArrowRight from "./assets/icons/arrow-right-solid.svg?react"

const Header = () => {
    return (  

    <div className ="bg-primary mx-auto px-4 min-h-24 md:pt-2 lg:pt-8 lg:pb-24">
    <div className ="flex flex-col items-center">
    <h1 className="w-[320px] text-3xl pt-6 text-white mx-auto text-center font-barlow font-extrabold  md:w-[700px] md:text-5xl md:leading-tight lg:text-6xl lg:w-[900px] lg:leading-[1.2]">
        Facilitating Financial Freedom Through Crypto.
    </h1>
    <button className="header-btn mt-6 w-full py-3 bg-white text-black rounded-xl font-spaceMono font-bold md:w-36 lg:mt-8">Join Us </button>

    <div className="highlights-container flex justify-center w-[340px] mt-8 mb-14 md:w-[600px] md:gap-6 md:pt-2 lg:pt-6 lg:gap-12 lg:w-[700px]">
        <div className="highlight basis-1/3 md:max-w-34 lg:max-w-44">
            <p className="text-white font-spaceMono font-bold text-base text-center md:text-lg">3K+</p>
            <p className="highlight-paragraph text-white text-center font-barlow leading-snug text-xs mt-1 md:text-base"> members on our discord server </p>
        </div>
  
        <div className="highlight basis-1/3 md:max-w-34 lg:max-w-44">
            <p className="text-white font-spaceMono font-bold text-base text-center md:text-lg">$4M+</p>
            <p className="highlight-paragraph text-white text-center font-barlow leading-snug text-xs mt-1 md:text-base"> in collective profit from our group </p>
        </div>
        <div className="highlight basis-1/3 md:max-w-34 lg:max-w-44">
            <p className="text-white font-spaceMono font-bold text-base text-center md:text-lg">200+</p>
            <p className="highlight-paragraph text-white text-center font-barlow leading-snug text-xs mt-1 md:text-base"> collaborations with Web3 projects </p>
        </div>
    </div>
    </div>
    <div className="w-10 hidden h-10 aspect-1/1 bg-secondary absolute right-24 top-[500px] rounded-lg lg:block mt-16">
        <ArrowRight className="rotate-90 object-cover w-full p-3 fill-white"/>
    </div>
    </div>
    
    );
}
 
export default Header;