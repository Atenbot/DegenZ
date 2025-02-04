import React from "react";
import MobileProfiles from "./MobileProfiles";
import TabletProfiles from "./TabletProfiles";
import LaptopProfiles from "./LaptopProfiles";

const data = [
  {
    image: "profile\\daemon.jpg",
    name: "Daemon",
    description: "NFT Trader",
    text: "I remember when Laroshe (DegenZ Head) gifted me the very first SOL I got in my wallet. Fast forward and I've made a 100x of it in DegenZ.",
  },
  {
    image: "profile\\teneteth.jpg",
    name: "Tenet.eth",
    description: "Airdrop Maxi",
    text: "I joined DegenZ in 2020. Leslie (DegenZ Head) sent us a google form to fill and I made $70K from the SAMO airdrop. Also minted a rare Degen Ape and sold for 200 SOL. Completely changed my life.",
  },
  {
    image: "profile\\maverick.jpg",
    name: "Maverick",
    description: "Lawyer",
    text: "When I saw a friend get $2K from the Solape drop. I begged my brother for 20 dollars to start crypto and a friend added me to DegenZ.  In a week, I turned it to $2K. That was the start, now I have my house on the way and I just bought my second car.",
  },
  {
    image: "profile\\donaldtrump.jpg",
    name: "Donald Trump",
    description: "President of the United States",
    text: "DegenZ is the greatest DAO on the planet.",
  },
  {
    image: "profile\\delat.jpg",
    name: "Delat",
    description: "NFT Trader",
    text: "Bought my kid brother a new phone for his birthday with my profits from Great Goats (13 SOL). I'll never forget his smile.",
  },
  {
    image: "profile\\zayzay.jpg",
    name: "ZayZay",
    description: "Founder of Goal Diggers DAO",
    text: "Laroshe (Degen Head) put me and so many others on. Made us get in on SOL when it was only $3.",
  },
  {
    image: "profile\\jasmine.jpg",
    name: "Jasmine",
    description: "Architect",
    text: "Made over 10K on airdrop forms when i first joined. Then I minted Ragnarok and sold for 2.5 ETH. Also made over 100 SOL on NFT shadow. ",
  },
  {
    image: "profile\\kevin11.jpg",
    name: "Kevin 11",
    description: "Producer",
    text: "Discovering DegenZ in my teenage years has allowed me to spend my adult years pursuing my interests without ever having to worry about money.",
  },
  {
    image: "profile\\montycakes.jpg",
    name: "Montycakes",
    description: "NFTs Trader",
    text: "I got three hyped project Whitelists here. Minted Crypto Coral Tribe and sold for 4.5 SOL. I used the liquidity to mint The Orcs (4.5 SOL) and Okay Bears and sold for 58 SOL. A member on here convinced me not to sell for 6 sol.",
  },
  {
    image: "profile\\panda.jpg",
    name: "Panda_nft",
    description: "NFTs Trader",
    text: "Minted Okay Bears and sold for 140 SOL. I'm not diamond holding 10K dollars lol.",
  },
  {
    image: "profile\\ade.jpg",
    name: "Ade",
    description: "Cybersecurity Manager",
    text: "Aten (DegenZ Head) introduced to DegenZ at age 17 in uni and in one year, I had made enough money to drop out and move to London to begin a Cybersecurity degree programme.",
  },
  {
    image: "profile\\kelechi.jpg",
    name: "Kelechi",
    description: "Old Taker",
    text: "I had about 1200 dollars on hand when BodeSlomo (DegenZ Head) convinced me to buy SOL when it was priced around 3 dollars back then. The rest is history.",
  },
  {
    image: "profile\\crossx.jpg",
    name: "CrossX",
    description: "Software Engineer",
    text: "On the very first day I loaded my wallet with $50 ETH to start my NFTs journey, Aten (DegenZ Head) sent me Goblintown's mint link and told me to mint for free. Sold for 6 ETH.",
  },
  {
    image: "profile\\lisa.jpg",
    name: "Lisa",
    description: "Baker",
    text: "Joined DegenZ with nothing. In few months I made $8K from NFT season and rotated the profit into trading calls on DegenZ.",
  },
  {
    image: "profile\\daniel.jpg",
    name: "Daniel",
    description: "Youtuber",
    text: "I got degodess WL from Aten (Degen Head) and he told me to mint as many as possible. Minted 6 and sold each for 2.7 SOL (16.2 SOL).",
  },
  {
    image: "profile\\halima_bby.jpg",
    name: "Halima_bby",
    description: "NFT Trader",
    text: "I won 1 sol from a DegenZ twitter giveaway when I was still a noob and it helped me a lot. Also got many project whitelists on here.",
  },
  {
    image: "profile\\toju.jpg",
    name: "Toju",
    description: "Analyst",
    text: "On Leslie's (Degen Head) group, I made over $100K on Safemoon. Minted Portals and sold for 100 SOL too.",
  },
  {
    image: "profile\\mellow.jpg",
    name: "Mellow",
    description: "Trader",
    text: "Been seeing people grind for Clanosaurz whitelist, and I'm so happy I got mine here.",
  },
  {
    image: "profile\\owlsandcigars.jpg",
    name: "Owlsandcigars",
    description: "Forex Trader",
    text: "Minted Primates NFT for 2 SOL and sold for 16 SOL. Minted Claynosaurz and sold for 30 SOL.",
  },
  {
    image: "profile\\cassius.jpg",
    name: "Cassius",
    description: "Surgery Student",
    text: "I had given up on NFTs when Aten (Degen Head) called me in the middle of the night and told me to buy ABC. Sold at 87 SOL. I think it ran up to a 100.",
  },
  {
    image: "profile\\bodeslomo.jpg",
    name: "BodeSlomo",
    description: "Software Engineer",
    text: "Joined this DAO when I was in uni back in 2021. Made around $4K off filling airdrop forms. Minted Claynosaurz and sold for 40 SOL. Bought Solstein and many others. Fast-forward to late 2024 and I randomly woke up to $5K in my wallet from STONKS one morning. The gift that keeps giving.",
  },
  {
    image: "profile\\debbie.jpg",
    name: "Debbie",
    description: "Illustrator",
    text: "Making loads of money is really nice, but the best part about DegenZ is all the wonderful people I've met. I'm happy we have all grown together.",
  },
  {
    image: "profile\\quicksilva.jpg",
    name: "Quicksilva",
    description: "Futures Trader",
    text: "Made $60K on Samo, then minted Portals and made 100 SOL.",
  },
  {
    image: "profile\\takeshikovacs.jpg",
    name: "Takeshikovacs",
    description: "Graphics Designer",
    text: "I got Claynosaurz WL on here. Minted and sold for 27 SOl. Thank you Degenz.",
  },
  {
    image: "profile\\tayo.jpg",
    name: "Tayo",
    description: "Gamer",
    text: "Laroshe (Degen Head) gave me SOL to start crypto in mid 2021. He shilled Solstein to me and I bought several for 0.1 SOL each. Later ran to 10 SOL FP. It's been a ride.",
  },
  {
    image: "profile\\leoprince.jpg",
    name: "Leoprince",
    description: "NFT Trader",
    text: "Minted the Great Goats whitelist I got on here and sold for 13 SOL in less than 6 hours.",
  },
  {
    image: "profile\\terrya.jpg",
    name: "TerryA",
    description: "Community Manager",
    text: "Taking Laroshe's trading calls has really helped me built up my liquidity.",
  },
  {
    image: "profile\\angel.jpg",
    name: "Angel",
    description: "Fashion Designer",
    text: "I minted a rare Famous Fox and sold for 80 SOL. Minted Llama and sold for 80 SOL. Also got Crypto Coral Tribe whitelist on here and sold for 10 SOL.",
  },
  {
    image: "profile\\patrick.jpg",
    name: "Patrick",
    description: "Airdrop Farmer",
    text: "Till this day, when I tell people there is a group where people made $40K - $100K by filling google forms, they don't believe me.",
  },
  {
    image: "profile\\iamflynn.jpg",
    name: "IamFlynn",
    description: "NFT Trader",
    text: "Laroshe shilled RagnarokMeta to us and told us how to get WL. I sold for 2.7 ETH.",
  },
  {
    image: "profile\\zayzay.jpg",
    name: "Nchedo",
    description: "Airdro Maxi",
    text: "Bought my apartment and car with my money from crypto.I don't know where I would be without DegenZ. Probably working some shitty 9-5 lmao.",
  },
  {
    image: "profile\\saturn.jpg",
    name: "Saturn",
    description: "Futures Trader",
    text: "DegenZ helped me pay my children's school fees.",
  },
  {
    image: "profile\\toffy.jpg",
    name: "Toffy",
    description: "Community Manager",
    text: "DegenZ provided Great Goats (13 Sol), The Orcs (5 sol), and many other whitelists for me. Aten Gave alpha for FTC which is by far my biggest flip to date, but the best thing is the sense of belonging to a environment where one can interact and meet new people and obtain new knowledge.",
  },
  {
    image: "profile\\iffy.jpg",
    name: "Iffy",
    description: "NFT Trader",
    text: "I won wl for Mous in da hous (20 SOL) and Smart Sea Society (15 SOL) from DegenZ. Those were big wins for me.",
  },
  {
    image: "profile\\johneth.jpg",
    name: "John.Eth",
    description: "Civil Engineer",
    text: "My dad got really ill in 2022. We would not never have been able to afford the bill if my friends and I did not contribute what we could out of our crypto. I met them and we all made our money in DegenZ DAO. I will never forget.",
  },
  {
    image: "profile\\pandamic.jpg",
    name: "Pandamic",
    description: "Stylist",
    text: "Getting into crypto as a noob, DegenZ made something that seemed so complicated become very easy for me. I learnt everything I needed to know and got whitelist for hyped projects here. When I minted and made enough profits, I transitioned to the forex and future channels with that liquidity. ",
  },
  {
    image: "profile\\lobodgreat.jpg",
    name: "Lobo D Great",
    description: "Illustrator",
    text: "Got Aptos Monkey WL here. Minted for 7.77 APT and sold for 55 APT.",
  },
  {
    image: "profile\\danielotd.jpg",
    name: "DanielOTD",
    description: "Writer",
    text: "The Great Goats (13 SOL) whitelist I got in DegenZ came through for me in a lot of ways and I'm still grateful for the opportunity.",
  },
];

const Testimonials = ({ breakpoint }) => {
  const [defaultProfiles, setDefaultProfiles] = React.useState([]);
  const [mdProfiles1, setMdProfiles1] = React.useState([]);
  const [mdProfiles2, setMdProfiles2] = React.useState([]);
  const [lgProfiles1, setLgProfiles1] = React.useState([]);
  const [lgProfiles2, setLgProfiles2] = React.useState([]);
  const [lgProfiles3, setLgProfiles3] = React.useState([]);

  React.useEffect(() => {
    {
      setDefaultProfiles(data);
    }
  }, []);

  // Get Tab Columns

  React.useEffect(() => {
    if (defaultProfiles.length > 0) {
      const mdArray2 = defaultProfiles.filter((_, index) => index % 2 === 1);
      setMdProfiles1(mdArray2);

      const mdArray1 = defaultProfiles.filter((_, index) => index % 2 === 0);
      setMdProfiles2(mdArray1);
    }
  }, [defaultProfiles]);

  // Get Laptop Columns

  React.useEffect(() => {
    if (defaultProfiles.length > 0) {
      const array1 = defaultProfiles.filter((_, index) => index % 3 === 0);
      const array2 = defaultProfiles.filter((_, index) => index % 3 === 1);
      const array3 = defaultProfiles.filter((_, index) => index % 3 === 2);

      setLgProfiles1(array1);
      setLgProfiles2(array2);
      setLgProfiles3(array3);
    }
  }, [defaultProfiles]);

  let content;
  switch (breakpoint) {
    case "laptop":
      content = (
        <LaptopProfiles
          profiles3={lgProfiles3}
          profiles2={lgProfiles2}
          profiles1={lgProfiles1}
        />
      );
      break;
    case "tablet":
      content = (
        <TabletProfiles profiles2={mdProfiles2} profiles1={mdProfiles1} />
      );
      break;
    default:
      content = <MobileProfiles profiles={defaultProfiles} />;
  }

  return (
    <div className="testimonials lg:pt-24 md:pt-20 bg-white" id="our-story">
      <div className="max-w-7px mx-auto">
        <div className="our-story">
          <h1 className="font-barlow font-bold text-4xl text-center pt-20 mx-8 text-secondary md:pt-8 md:text-5xl md:mx-10 lg:mx-32 2xl:text-6xl">
            "I never thought a gc would change my life."
          </h1>
          <p className="mx-6 max-w-3xl pb-16 text-center pt-6 font-barlow leading-tight text-secondary text-lg  md:text-lg md:mx-8 md:pb-24 md:pt-6 lg:mx-auto lg:text-xl lg:pb-24 2xl:text-2xl 2xl:max-w-5xl 2xl:pt-8">
            At DegenZ, we believe financial freedom is essential to living in
            the 21st century. Driven by this conviction, for 6 years, we have
            dedicated ourselves to building a pathway that provides everyday
            individuals with the tools, knowledge, and community support to
            break free from economic limitations. Your journey of
            transforming financial independence from an aspiration to a reality
            starts here.
          </p>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Testimonials;
