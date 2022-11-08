import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import images from '../assets';
import Banner from '../components/Banner';
import CreatorCard from '../components/CreatorCard';

const Home = () => {
  const { theme } = useTheme();
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 110;
    if (direction === 'left') current.scrollLeft -= scrollAmount;
    if (direction === 'right') current.scrollLeft += scrollAmount;
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parentCurrent } = parentRef;

    console.log(current?.scrollWidth, parentCurrent?.offsetWidth);
    if (current?.scrollWidth <= parentCurrent?.offsetWidth) setShowButton(false);
    else setShowButton(true);
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => window.removeEventListener('resize', isScrollable);
  });

  return (
    <div className="flex justify-center p-8 sm:px-4 py-12">
      <div className="w-full minmd:w-4/5 ">
        <Banner
          text="Discover, collect and sell extraordinary NFTs"
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
          childStyles="md:text-4xl sm:text-2xl sm:text-xl text-left"
        />
        <div>
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl ml-4 font-semibold xs:ml-0">
            Top sellers
          </h1>
          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
              {[6, 7, 8, 9, 10].map((i) => <CreatorCard key={`creator${i}`} rank={`${i}`} creatorEths={i} creatorImage={images[`creator${i}`]} creatorName={`UserId${i}`} />)}
              {showButton && (
              <>
                <div
                  className="absolute w-8 h-8 minlg:w-12 minlg:w-12 top-45 cursor-pointer left-0"
                  onClick={() => handleScroll('left')}
                >
                  <Image src={images.left} layout="fill" objectFit="contain" alt="left_arrow" className={theme === 'light' && 'filter invert'} />
                </div>
                <div
                  className="absolute w-8 h-8 minlg:w-12 minlg:w-12 top-45 cursor-pointer -right-0"
                  onClick={() => handleScroll('right')}
                >
                  <Image src={images.right} layout="fill" objectFit="contain" alt="left_arrow" className={theme === 'light' && 'filter invert'} />
                </div>
              </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
