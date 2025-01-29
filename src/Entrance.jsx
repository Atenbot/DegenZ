import TwitterIcon from './assets/icons/x-twitter-brands-solid.svg?react'
import DiscordIcon from './assets/icons/discord-brands-solid.svg?react'

const Entrance = () => {


    return (

    <div className="bg-secondary px-3 pt-14 pb-14 md:px-8 lg:py-20">
        <div className="bg-white px-4 pt-8 pb-8 rounded-md md:pb-12 md:px-10 md:py-10 lg:py-14">
        <h1 className='text-2xl font-barlow font-bold md:text-4xl md:pb-4 lg:text-center lg:text-5xl '>Membership Entrance</h1>
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 lg:flex-col">
        <p className='font-barlow pb-1.5 w-[280px] text-sm md:text-3xl md:w-[350px] md:pt-4 lg:text-center lg:w-[900px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati quam.</p>
        <div className="flex flex-col md:items-center md:gap-2 lg:flex-row lg:gap-8">
        <button className="bg-black flex w-full py-0.5 mt-4 items-center rounded md:px-8 md:py-2 md:rounded-xl">
            <div className="bg-white w-8 rounded ml-4 mr-2.5 my-2 md:w-10 md:mr-4 md:ml-0">
                <TwitterIcon className='w-full h-auto object-cover p-0.5' />
            </div>
            <p className='text-white font-spaceMono text-sm md:text-xl'>Follow on X</p>
        </button>

        <button className="bg-primary flex w-full py-0.5 mt-4 items-center rounded md:px-8 md:py-2 md:rounded-xl whitespace-nowrap">
            <div className="bg-white w-8 h-8 rounded ml-4 mr-2.5 my-2 md:w-10 md:h-10 md:mr-4 md:ml-0">
                <DiscordIcon className='w-full h-auto object-cover p-0.5 fill-primary relative top-0.5 md:top-1' />
            </div>
            <p className='text-white font-spaceMono text-sm md:text-xl'>Join Discord</p>
        </button>
        </div>

        </div>


        </div>
    </div>

      );
}
 
export default Entrance;