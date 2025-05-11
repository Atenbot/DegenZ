import React, { useRef, useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import ChevronDown from "./assets/icons/chevron-down-solid.svg?react";

const FeaturesAccordion = () => {
  const [openItem, setOpenItem] = React.useState(null);
  const containerRef = useRef(null);
  const itemPositions = useRef({});
  const accordionData = [
    {
      title: "Learning Resources",
      content:
        "DegenZ has a well-curated list of study materials and guides on a wide range of cryptocurrency networks available to it's members.",
    },
    {
      title: "Alpha Insights",
      content:
        "Experienced members of the DegenZ team continually provide community members with updates on profitable opportunities in the crypto space.",
    },
    {
      title: "Partner Access",
      content:
        "DegenZ members enjoy access to several web3 projects that we partner and collaborate with. Benefiting from whitelists, pre-sale participation and tool access.",
    },
    {
      title: "Trading Signals",
      content:
        "DegenZ has employed a dedicated team of experienced traders to give calls to our members on memecoin, spot, and futures trading.",
    },
    {
      title: "Job Opportunities",
      content:
        "DegenZ possesses a robust job-seeking system that continually updates members on job opportunities in the space along with mentors to guide them.",
    },
    {
      title: "Community Network",
      content:
        "With a community many thousands strong, members of DegenZ have access to a pool of talented individuals whom they can make beneficial connections with.",
    },
  ];

  // Store the initial position of each accordion item
  useEffect(() => {
    if (containerRef.current) {
      const updatePositions = () => {
        const items = containerRef.current.querySelectorAll(
          "[data-accordion-item]"
        );
        items.forEach((item) => {
          const { offsetTop } = item;
          const id = item.getAttribute("data-value");
          itemPositions.current[id] = offsetTop;
        });
      };

      // Initial position recording
      updatePositions();

      // Update positions on window resize
      window.addEventListener("resize", updatePositions);
      return () => window.removeEventListener("resize", updatePositions);
    }
  }, [accordionData]);

  const handleValueChange = (value) => {
    // Get current scroll position
    const scrollPosition = window.scrollY;
    const previousItem = openItem;

    if (value === previousItem) {
      // Simply closing an item, just update state
      setOpenItem(value);
      return;
    }

    // Remember current positions before state changes
    const itemsBeforeUpdate = {};
    const items = containerRef.current.querySelectorAll(
      "[data-accordion-item]"
    );
    items.forEach((item) => {
      const id = item.getAttribute("data-value");
      itemsBeforeUpdate[id] = item.getBoundingClientRect().top + window.scrollY;
    });

    // Update the state
    setOpenItem(value);

    // After DOM update, fix the scroll position
    setTimeout(() => {
      if (!value) return; // Nothing to adjust if we're just closing

      const clickedItem = containerRef.current.querySelector(
        `[data-value="${value}"]`
      );
      if (!clickedItem) return;

      // Get new position of the clicked item
      const newPosition =
        clickedItem.getBoundingClientRect().top + window.scrollY;
      const oldPosition = itemsBeforeUpdate[value] || 0;

      // Calculate the difference and adjust scroll
      const diff = newPosition - oldPosition;
      if (Math.abs(diff) > 5) {
        // Only adjust if difference is significant
        window.scrollTo({
          top: scrollPosition + diff,
          behavior: "auto",
        });
      }
    }, 10); // Small delay to let DOM update
  };

  return (
    <div
      ref={containerRef}
      className="pt-2 pb-14 md:pb-20 lg:pt-11 xl:pt-18 lg:w-[600px] xl:w-[700px]"
    >
      <Accordion.Root
        type="single"
        collapsible
        className="w-full"
        onValueChange={handleValueChange}
      >
        {accordionData.map((item, index) => {
          const itemValue = `item-${index}`;
          const isOpen = openItem === itemValue;

          return (
            <Accordion.Item
              key={index}
              value={itemValue}
              data-value={itemValue}
              data-accordion-item
              className={`py-2 overflow-hidden md:rounded-lg md:py-4 md:px-6 lg:mx-0 lg:px-0 lg:py-2
                bg-secondary transition-colors duration-300 my-4 relative
                ${isOpen ? "z-10" : "z-0"}`}
            >
              <Accordion.Header
                className={`${
                  isOpen ? "bg-white" : "bg-secondary"
                } transition-colors duration-300 md:px-6 md:py-2 rounded-t-lg`}
              >
                <Accordion.Trigger
                  className={`flex items-center justify-between w-full px-4 pt-5 md:pt-6 md:px-2 lg:py-2 lg:pt-5 lg:pb-0
                  font-spaceMono text-xl font-bold md:text-3xl lg:text-2xl
                  transition-colors duration-300 ${
                    isOpen ? "text-black" : "text-white"
                  }`}
                >
                  {item.title}
                  <ChevronDown
                    className={`w-5 h-5 md:w-8 md:h-8 lg:w-7 lg:h-7
                    transition-all duration-300
                    ${
                      isOpen
                        ? "rotate-0 fill-gray-900"
                        : "-rotate-90 fill-white"
                    }`}
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <div
                className={`bg-white overflow-hidden md:rounded-b-lg md:px-6 ${
                  isOpen ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              >
                <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden px-4 mt-4 mr-4 pb-5 text-black font-barlow md:text-2xl md:px-2 md:mt-2 md:pb-8 lg:text-xl">
                  <p className="ml-4 md:ml-0">{item.content}</p>
                </Accordion.Content>
              </div>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-secondary" id="features">
      <div className="max-w-7xl mx-auto pb-4 pt-4 md:pt-10 lg:pt-8 lg:flex lg:px-12 xl:px-6 lg:justify-between lg:py-4">
        <h1 className=" w-[300px] mx-auto text-white font-barlow font-bold text-center text-3xl pt-20 pb-2 md:w-[600px] md:text-4xl lg:text-left lg:w-[500px] lg:mx-0 xl:text-5xl xl:w-[600px] 2xl:text-6xl 2xl:w-[800px]">
          Features of DegenZ DAO Membership
        </h1>
        <FeaturesAccordion />
      </div>
    </section>
  );
};

export default Features;
