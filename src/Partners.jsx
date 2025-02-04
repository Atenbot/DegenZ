import React from "react";
import { InView, useInView } from "react-intersection-observer";

const data = [
    {"name": "RoverX", "image": "projects\\roverx.jpg"},
    {"name": "Claynosaurz", "image": "projects\\claynosaurzalt.jpg"},
    {"name": "Okay Bears", "image": "projects\\okaybears.jpg"},
    {"name": "Tokun", "image": "projects\\tokun.jpg"},
    {"name": "Ledger", "image": "projects\\ledger.jpg"},
    {"name": "Aptos Monkeys", "image": "projects\\aptosmonkey.jpg"},
    {"name": "Rethinkable", "image": "projects\\rethinkable.jpg"},
    {"name": "Seiyans", "image": "projects\\seiyans.jpg"},
    {"name": "Fuddies", "image": "projects\\fuddies.jpg"},
    {"name": "Primates", "image": "projects\\primates.jpg"},
    {"name": "Lancet Bot", "image": "projects\\lancetbot.jpg"},
    {"name": "Atadia", "image": "projects\\atadia.jpg"},
    {"name": "Illogics", "image": "projects\\illogics.jpg"},
    {"name": "Great Goats", "image": "projects\\greatgoats.jpg"},
    {"name": "Lily", "image": "projects\\lily.jpg"},
    {"name": "Coral Tribe", "image": "projects\\coraltribe.jpg"},
    {"name": "Communi3", "image": "projects\\communi3.jpg"}
]


const Partners = () => {

    const [partners, setPartners] = React.useState(null);
    const contentRef = React.useRef(null)
    const [playAnimation, setPlayAnimation] = React.useState(false)

    const { ref, inView, entry } = useInView({
      threshold: 0,
    });

React.useEffect(() => {
    {
     setPartners(data)
    };
}, []);

React.useEffect(() =>{
    inView ? setPlayAnimation(true) : setPlayAnimation(false)
  }, [inView])

    return ( 

        <div className="pt-16 pb-8 md:pt-20 lg:pt-16 lg:pb-20 xl:pt-24 bg-gray-50">
            <h1 className="font-barlow mx-auto w-[300px] text-3xl font-bold text-center text-secondary md:text-4xl md:w-full 2xl:pt-6 2xl:text-6xl 2xl:pb-4">Our Partners and Collaborators</h1>
            <div className="pt-12 pb-2 overflow-hidden whitespace-nowrap md:pt-14"
                    ref={ contentRef }>
                <div className={`grid grid-flow-col animate-marquee gap-4 w-fit md:gap-10 lg:gap-12 ${!playAnimation ? "animate-paused" : "animate-playing lg:hover:animate-paused"}`}
                ref= {ref}>
                    
                    {partners?.map((partner, index) => (
                    <figure key={index} className="w-36 mx-auto md:w-48 lg:w-52">
                        <img src={ partner.image } alt="" className="w-full h-auto object-cover rounded-2xl md:rounded-3xl" />
                        <figcaption className="pt-3 text-center font-spaceMono text-secondary md:text-lg">{ partner.name }</figcaption>
                    </figure>
                ))}
                {/* duplicate */}
                { partners?.map((partner, index) => (
                    <figure key={index} className="w-36 mx-auto  md:w-48 lg:w-52">
                        <img src={ partner.image } alt="" className="w-full h-auto object-cover rounded-2xl md:rounded-3xl" />
                        <figcaption className="pt-3 text-center font-spaceMono text-secondary md:text-lg">{ partner.name }</figcaption>
                    </figure>
                ))}

                </div>
            </div>
        </div>

     );
}
 
export default Partners;




 
