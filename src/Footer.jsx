import TwitterIcon from './assets/icons/x-twitter-brands-solid.svg?react'
import DiscordIcon from './assets/icons/discord-brands-solid.svg?react'


const Footer = () => {
    return (  
        <div className='bg-primary relative pt-10 pb-12 md:pt-16'>
        <div className="flex flex-col items-center">
            <div className="flex flex-row-reverse gap-x-4 w-20 md:gap-12 md:min-w-[150px]">
                <TwitterIcon className="w-full object-cover fill-white" />
                <DiscordIcon className="w-full object-cover fill-white" />
            </div>
            <p className='font-barlow text-white text-xs text-center pt-4 tracking-wide md:text-base md:pt-4 lg:text-lg'>© 2024 DegenZ DAO | Terms and Conditions |<br></br> Contact Us</p>
            <p className="text-white font-barlow text-xs text-center pt-2 tracking-wider md:text-base lg:text-lg">Created By: <a href='https://x.com/AtenSun_?t=T2lXeuFpO9_0CyM2qB3Fhw&s=09"' className='underline'>AtenSun_</a></p>
        </div>
        </div>
    );
}
 
export default Footer;