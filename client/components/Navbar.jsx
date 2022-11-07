import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import images from '../assets';
import CustomButton from './CustomButton';

const navItems = [{ name: 'Explore NFTs', link: '/explore-nfts' }, { name: 'My NFTs', link: '/my-nfts' }, { name: 'Listed NFTs', link: '/created-nfts' }];

const MenuItem = ({
  item, active, setActive, index, setIsOpen = () => {},
}) => (
  <li
    key={index}
    onClick={() => { setActive(item.name); setIsOpen(false); }}
    className={`flex flex-row items-center text-base dark:hover:text-white hover:text-nft-dark mx-3 ${active === item.name ? 'dark:text-white text-nft-black-1' : 'dark:text-nft-gray-3 text-nft-gray-2'}`}
  >
    <Link href={item.link}>
      <div>{item.name}</div>
    </Link>
  </li>
);

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
        onClick={() => setActive(null)}
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
            <p className="dark:text-white text-nft-black-1 text-lg ml-1 md:hidden ">NFTMarketplace
            </p>
          </div>
        </Link>
      </div>

      <div className="md:hidden flex">
        <ul className={`list-none flexCenter cursor-pointer flex-row ${isMobile && 'flex-col h-full'}`}>
          {navItems.map((item, index) => (
            <MenuItem
              item={item}
              index={index}
              active={active}
              setActive={setActive}
              setIsOpen={setIsOpen}
            />
          ))}
        </ul>
      </div>

      {isOpen && (
      <div className="hidden md:flex flex-col m-4 fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h justify-between">
        <ul className={`list-none flexCenter cursor-pointer flex-col my-1 ${isMobile && 'flex-col h-full'}`}>
          {navItems.map((item, index) => (
            <MenuItem
              item={item}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
        <div className="flex flexCenter p-4 border-t mb-2">
          <ButtonGroup setActive={setActive} router={router} />
        </div>
      </div>
      )}

      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mx-2">
          <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          <label htmlFor="checkbox" className="flexBetween w-8 h-4 nft-gradient rounded-2xl p-1 relative label">
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
      </div>

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
