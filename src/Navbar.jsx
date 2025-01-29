const Navbar = () => {
    return ( 



        <div className="flex justify-between items-center sticky top-0 bg-primary px-2 mx-auto z-10 md:px-8 lg:static lg:px-16">
        <img src="./assets/logos/degenz.jpg" className="w-24 h-auto md:w-32 aspect-w-1 aspect-h-1 lg:w-36" alt="" />
        <div className="flex text-white items-center justify-between md:w-[370px] font-spaceMono font-semibold lg:w-[450px]">
        <a className="hidden md:block">Our Story</a>
        <a className="hidden md:block">Features</a>
        <button className="nav-btn px-8 py-3 bg-white text-black rounded-xl font-spaceMono font-bold text-sm md:text-base">Join Us </button>
        </div>
        </div>

     );
}
 
export default Navbar;