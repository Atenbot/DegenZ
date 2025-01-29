import React from "react";


    const getBreakpoint = (width) => {
        if (width >= 1024) return "laptop";
        if (width >= 768) return "tablet";
        return "mobile";
    };

    export const useBreakpoints = () => {
        const [breakpoint, setBreakpoint] = React.useState(getBreakpoint(window.innerWidth));
    

    React.useEffect(() => {
        const handleResize = () => {
            const newBreakpoint = getBreakpoint(window.innerWidth);
            setBreakpoint(newBreakpoint);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoint;
};