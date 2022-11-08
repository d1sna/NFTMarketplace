import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import images from '../assets';
import CustomButton from './CustomButton';
import NavItem from './NavItem';
import ToggleTheme from './ToggleTheme';

const navItems = [
  { name: 'Explore NFTs', link: '/explore-nfts' },
  { name: 'My NFTs', link: '/my-nfts' },
  { name: 'Listed NFTs', link: '/created-nfts' },
];

const ButtonGroup = ({ setActive, setIsOpen = () => {}, router }) => {
  const isConnected = true;

  return isConnected ? (
    <CustomButton
      text="Create"
      clickHandler={() => {
        setActive('');
        setIsOpen(false);
        router.push('/create-nft');
      }}
    />
  ) : (
    <CustomButton
      text="Connect"
      clickHandler={() => {
        setActive('');
        setIsOpen(false);
        // router.push('/create-nft');
      }}
    />
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const isMobile = false;

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">

      <div
        onClick={() => { setActive(null); setIsOpen(false); }}
        className="flex flex-1 flex-row justify-start cursor-pointer"
      >
        <Link href="/">
          <div className="flexCenter">
            <Image
              src={images.logo02}
              objectFit="contain"
              alt="logo"
              width={32}
              height={32}
            />
            <p className="dark:text-white text-nft-black-1 text-lg ml-1 md:hidden font-semibold text-base">NFT Marketplace
            </p>
          </div>
        </Link>
      </div>

      <div className="md:hidden flex">
        <ul className={`list-none flexCenter cursor-pointer flex-row ${isMobile && 'flex-col h-full'}`}>
          {navItems.map((item, index) => (
            <NavItem
              item={item}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
      </div>

      {isOpen && (
      <div className="hidden md:flex flex-col m-4 fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h justify-between">
        <ul className={`list-none flexCenter cursor-pointer flex-col my-1 ${isMobile && 'flex-col h-full'}`}>
          {navItems.map((item, index) => (
            <NavItem
              item={item}
              index={index}
              active={active}
              setActive={setActive}
              setIsOpen={setIsOpen}
            />
          ))}
        </ul>
        <div className="flex flexCenter p-4 border-t mb-2">
          <ButtonGroup setActive={setActive} setIsOpen={setIsOpen} router={router} />
        </div>
      </div>
      )}

      <ToggleTheme setTheme={setTheme} theme={theme} />

      <div className="mx-4 md:hidden">
        <ButtonGroup setActive={setActive} setIsOpen={setIsOpen} router={router} />
      </div>

      <div className="hidden md:flex mx-4">
        {isOpen ? (
          <Image
            src={images.cross}
            onClick={() => setIsOpen(false)}
            width={22}
            height={22}
            objectFit="contain"
            className={theme === 'light' && 'filter invert'}
          />
        ) : (
          <Image
            src={images.menu}
            onClick={() => setIsOpen(true)}
            width={22}
            height={22}
            objectFit="contain"
            className={theme === 'light' && 'filter invert'}
          />
        ) }
      </div>

    </nav>
  );
};

export default Navbar;
