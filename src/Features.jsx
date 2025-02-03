import React from "react";
import ChevronDown from './assets/icons/chevron-down-solid.svg?react';

const Features = () => {

    const [activeIndex, setActiveIndex] = React.useState(null);
    const contentRefs = React.useRef([]);

    const toggleAccordion = (index) =>{
        setActiveIndex( activeIndex === index ? null : index)
    }

    const setContentHeights = () =>{
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.height = activeIndex === index ? `${ref.scrollHeight}px` : "0px";
            }
        });
    };

    React.useEffect(() => {
        setContentHeights();
    }, [activeIndex])

    const accordionData = [
        {
            title: "Learning Resources",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Alpha Insights",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "NFT Whitelists",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Futures Trading",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Job Opportunities",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Trading Bots",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]


    return ( 
        <section className="bg-secondary ">
            <div className="max-w-7xl mx-auto pb-4 pt-4 md:pt-10 lg:pt-8 lg:flex lg:px-12 xl:px-6 lg:justify-between lg:py-4">
            <h1 className=" w-[300px] mx-auto text-white font-barlow font-bold text-center text-3xl pt-20 md:w-[600px] md:text-4xl lg:text-left lg:w-[500px] lg:mx-0 xl:text-5xl xl:w-[600px] 2xl:text-6xl 2xl:w-[800px]">Features of DegenZ DAO Membership</h1>
             <div className="pt-2 pb-14 md:pb-20 lg:pt-9 lg:w-[600px] xl:w-[700px]">
            {accordionData.map((item, index) =>{
                const isActive = activeIndex === index;


                            
                return(
                                <div key={index} className={`mt-4 bg-secondary px-4 md:mx-6 md:rounded-lg md:py-4 md:px-8 lg:mx-0 lg:py-2 ${isActive ? "bg-white rounded-t-lg transition-colors duration-300" : "bg-secondary transition-all duration-300"}`}>
                                <div className="flex items-center justify-between pt-5 w-full"
                                        role="button"
                                        onClick={()=> toggleAccordion(index)}
                                        >
                                    <p className={`font-spaceMono text-xl font-bold md:text-3xl lg:text-2xl ${isActive ? "text-black" : "text-white"}`}>{item.title}</p>
                                    <ChevronDown className={`w-5 h-5 aspect-auto md:w-8 md:h-8 lg:w-7 lg:h-7 ${isActive ? "fill-black" : "fill-white -rotate-90"}`}/>
                                </div>
                               {activeIndex === index && (
                                <div 
                                ref= {(el) => (contentRefs.current[index] = el)}
                                style={{
                                    height: "0px",
                                    transition: "height 0.3s ease",
                                    overflow: "hidden",
                                }}
                                className="mt-4 mr-4 pb-5">

                                    <p className={`font-barlow text-black md:text-2xl lg:text-xl ${isActive && "ml-4 md:ml-0"}`}>{item.content}</p>
                                </div>)}
                            </div>         
                )})}
                </div>
            </div>
        </section>

     );
}
 
export default Features;