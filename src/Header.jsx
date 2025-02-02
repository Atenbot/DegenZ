import ArrowRight from "./assets/icons/arrow-right-solid.svg?react"
import Navbar from './Navbar.jsx'

const Header = () => {

    const scrollIntoView = () => {
        const element = document.querySelector('#our-story');
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (  

<>
<Navbar />
<div className ="px-4 min-h-24 pt-16 md:pt-2 lg:pt-8 lg:pb-24">
    <div className="max-w-7xl mx-auto relative">
    <div className ="flex flex-col items-center">
    <h1 className="text-4xl pt-10 text-white mx-auto text-center font-barlow font-extrabold  md:w-[700px] md:text-5xl md:leading-tight lg:text-6xl lg:w-[900px] lg:leading-[1.2] lg:pt-4 2xl:text-7xl 2xl:w-[1200px]">
        Facilitating Financial Freedom Through Crypto.
    </h1>
    <button className="header-btn mt-8 w-full py-3 bg-white text-black rounded-xl font-spaceMono font-bold md:w-fit md:px-8 md:text-base lg:mt-8 2xl:text-xl 2xl:py-5 2xl:px-12 2xl:rounded-2xl 2xl:mt-10">Join Us </button>

    <div className="highlights-container mx-auto flex justify-center w-[340px] mt-8 mb-14 md:w-[600px] md:gap-6 md:pt-2 lg:pt-6 lg:gap-12 lg:w-[700px] 2xl:min-w-[1000px]">
        <div className="highlight basis-1/3 md:max-w-34 lg:min-w-44 2xl:max-w-64">
            <p className="text-white font-spaceMono font-bold text-base text-center md:text-lg 2xl:text-2xl">3K+</p>
            <p className="highlight-paragraph text-white text-center font-barlow leading-snug text-xs mt-1 md:text-base 2xl:text-xl"> members on our discord server </p>
        </div>
  
        <div className="highlight basis-1/3 md:max-w-34 lg:min-w-44 2xl:max-w-64">
            <p className="text-white font-spaceMono font-bold text-base text-center md:text-lg 2xl:text-2xl">$4M+</p>
            <p className="highlight-paragraph text-white text-center font-barlow leading-snug text-xs mt-1 md:text-base 2xl:text-xl"> in collective profit from our group </p>
        </div>
        <div className="highlight basis-1/3 md:max-w-34 lg:min-w-44 2xl:max-w-64">
            <p className="text-white font-spaceMono font-bold text-base text-center md:text-lg 2xl:text-2xl">200+</p>
            <p className="highlight-paragraph text-white text-center font-barlow leading-snug text-xs mt-1 md:text-base 2x:text-xl"> collaborations with Web3 projects </p>
        </div>
    </div>
    </div>
    <button className="w-10 hidden h-10 aspect-1/1 bg-secondary absolute mt-2 right-[3.7rem] custom:right-[2.7rem] 2xl:right-[3.7rem] rounded-lg lg:block 2xl:w-12 2xl:h-12"
    onClick={ scrollIntoView }>
        <ArrowRight className="rotate-90 object-cover w-full p-3 fill-white 2xl:p-3.5"/>
    </button>
        </div>
    </div>
</>


    
    );
}
 
export default Header;