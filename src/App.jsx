import React from "react";

import Entrance from "./Entrance";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Partners from "./Partners";
import Team from "./Team";
import Testimonials from "./Testimonials";
import { useBreakpoints } from "./useBreakpoints";

// App.jsx
function App() {
const breakpoint = useBreakpoints();

  return (

    <>
    <div className="lg:bg-grid-image bg-cover xl:bg-contain bg-primary">
    < Header />
    </div>
  <Testimonials breakpoint={breakpoint} />
  <Features />
  <Partners />
  <Entrance />
  <Team />
  <Footer />
  </>
  );
}

export default App;