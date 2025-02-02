const Navbar = () => {
    return ( 



        <div className="fixed top-0 left-0 right-0 bg-primary lg:bg-transparent px-2 z-10 md:px-8 lg:static">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img src="logos\degenzTransparent.png" className="w-24 h-auto md:w-32 aspect-w-1 aspect-h-1 lg:w-36 2xl:w-48" alt="" />
        <div className="flex text-white items-center justify-between md:w-[370px] font-spaceMono font-semibold lg:w-[450px] 2xl:min-w-[550px]">
        <a className="hidden md:block 2xl:text-xl">Our Story</a>
        <a className="hidden md:block 2xl:text-xl">Features</a>
        <button className="nav-btn px-8 py-3 bg-white text-black rounded-xl font-spaceMono font-bold text-sm md:text-base 2xl:text-xl 2xl:py-5 2xl:px-12 2xl:rounded-2xl">Join Us </button>
        </div>
        </div>
        </div>

     );
}
 
export default Navbar;

<p></p>