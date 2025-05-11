import TwitterIcon from "./assets/icons/x-twitter-brands-solid.svg?react";
import DiscordIcon from "./assets/icons/discord-brands-solid.svg?react";
import TelegramIcon from "./assets/icons/telegram-brands.svg?react";
import EnvelopeIcon from "./assets/icons/envelope-regular.svg?react";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-x-6 mx-auto w-48 pt-8 fill-white md:w-60 xl:pt-14 justify-between">
          <a href="https://x.com/_DegenZ">
            <TwitterIcon className="aspect-square w-7 md:w-9" />
          </a>
          <a href="https://discord.gg/vvg7NdN7tu">
            <DiscordIcon className="aspect-square w-7 md:w-9" />
          </a>
          <a href="https://t.me/+Tub37_BXfz4wZDI0">
            {" "}
            <TelegramIcon className="aspect-square w-7 md:w-9" />
          </a>
          <a href="mailto:aten27sun@gmail.com">
            {" "}
            <EnvelopeIcon className="aspect-square w-7 md:w-9" />
          </a>
        </div>
        <div className="flex justify-between py-6 mx-4 text-white items-center md:py-10">
          <p className="text-xs font-barlow tracking-wide">
            © 2024 DegenZ DAO{" "}
          </p>
          <p className="text-sm font-barlow tracking-wider">
            <a href="mailto:aten27sun@gmail.com"> Contact Us</a> | Terms{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
