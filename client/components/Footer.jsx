import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import images from '../assets';

const ELinks = { 0: 'https://www.instagram.com/d1sna', 1: 'https://t.me/d1sna' };

const Footer = () => {
  const { instagram, telegram, discord, twitter } = images;
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-6 py-12">
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="dark:text-white text-nft-black-1 font-semibold text-base">NFT Marketplace, inc. All Rights Reserved</p>
          <div className="flex justify-between sm:mt-4">
            {[instagram, telegram, discord, twitter].map((icon, index) => (
              <a href={ELinks[index]} aria-label={ELinks[index]} className="mx-2 cursor-pointer">
                <Image src={icon} height={22} width={22} objectFit="contain" className={`${theme !== 'dark' && 'bg-inherit invert'}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
