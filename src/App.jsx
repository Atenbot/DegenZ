import Entrance from "./Entrance";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Partners from "./Partners";
import Team from "./Team";
import Testimonials from "./Testimonials";
import { useBreakpoints } from "./useBreakpoints";

// App.jsx
function App() {
const breakpoint = useBreakpoints();

  return (

    <>
    <Navbar />
  < Header />
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