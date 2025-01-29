import React from "react";
import { InView, useInView } from "react-intersection-observer";

const MobileProfiles = ({ profiles }) => {

const [isExpanded, setIsExpanded] = React.useState(false);
const [isVisible, setIsVisible] = React.useState(false);
const contentRef = React.useRef(null);
const [scrollPosition, setScrollPosition] = React.useState(0);


const { ref, inView, entry } = useInView({
  threshold: 0,
  triggerOnce: true
});

React.useEffect(() =>{
  inView ? setIsVisible(true) : null
}, [inView])


  const handleExpand = () => {
    setIsExpanded((oldValue) => !oldValue);
      setScrollPosition(window.scrollY);
  };

  const handleContract = () => {
    setIsExpanded((oldValue) => !oldValue);
    setIsVisible(false)
    window.scrollTo(0, scrollPosition)
  }

  return (
    <section
      className={`relative mx-auto ${
        !isExpanded ? "max-h-[450px] overflow-hidden" : "h-contain"
      }`}
      ref = {contentRef}
    >
      <div className="pt-3 mx-4"

    >
        <ul className="space-y-8"
>
          {!isExpanded && (profiles).slice(0,2)?.map((profile, index) => (
            <li 
             className="text-sm leading-6"
             key={index}
             >
              <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6">
                <blockquote className="mt-6 text-slate-700 font-barlow">
                  <p>{profile.text}</p>
                </blockquote>
                <figcaption className="flex items-center space-x-4">
                  <img
                    src={profile.image}
                    alt=""
                    className="flex-none w-14 h-14 rounded-full object-cover"
                  />
                  <div className="flex-auto">
                    <div className="text-lg text-slate-900 font-semibold font-barlow">
                      <a>
                        <span className="absolute inset-0"></span>
                        {profile.name}
                      </a>
                    </div>
                    <div className="font-barlow text-sm my-1">
                      {profile.description}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}

        {isExpanded && profiles?.map((profile, index) => (
            <li 
             className="text-sm leading-6"
             key={index}
             ref = {index === 6 ? ref : null}
             >
              <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6">
                <blockquote className="mt-6 text-slate-700 font-barlow">
                  <p>{profile.text}</p>
                </blockquote>
                <figcaption className="flex items-center space-x-4">
                  <img
                    src={profile.image}
                    alt=""
                    className="flex-none w-14 h-14 rounded-full object-cover"
                  />
                  <div className="flex-auto">
                    <div className="text-lg text-slate-900 font-semibold font-barlow">
                      <a>
                        <span className="absolute inset-0"></span>
                        {profile.name}
                      </a>
                    </div>
                    <div className="font-barlow text-sm my-1">
                      {profile.description}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}

        </ul>
      </div>

      {!isExpanded &&
      <div className="flex justify-center inset-x-0 bg-gradient-to-t from-white to-transparent absolute pt-32 pb-8 bottom-0">
      <button
        className="bg-primary text-white font-spaceMono py-3 px-5 rounded-lg"
        onClick={handleExpand}
      >
        Show More
      </button>
    </div> }

    { isVisible && (
          <div className="flex justify-center inset-x-0 bg-gradient-to-t from-white sticky pt-32 pb-8 bottom-0 transition-all duration-3000 ease">
          <button
            className="text-white font-spaceMono py-3 px-5 rounded-lg bg-secondary"
            onClick={handleContract}
          >
            Okay I get it
          </button>
        </div>)}
    </section>
  );
};

export default MobileProfiles;
