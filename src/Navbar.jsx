const Navbar = () => {
    return ( 



        <div className="flex justify-between items-center sticky top-0 bg-primary px-2 mx-auto z-10 md:px-8 lg:static lg:px-16">
        <img src="logos\degenz.jpg" className="w-24 h-auto md:w-32 aspect-w-1 aspect-h-1 lg:w-36 xl:w-48" alt="" />
        <div className="flex text-white items-center justify-between md:w-[370px] font-spaceMono font-semibold lg:w-[450px] 2xl:min-w-[550px]">
        <a className="hidden md:block 2xl:text-xl">Our Story</a>
        <a className="hidden md:block 2xl:text-xl">Features</a>
        <button className="nav-btn px-8 py-3 bg-white text-black rounded-xl font-spaceMono font-bold text-sm md:text-base 2xl:text-xl 2xl:py-5 xl:px-12 2xl:rounded-2xl">Join Us </button>
        </div>
        </div>

     );
}
 
export default Navbar;

<p></p>