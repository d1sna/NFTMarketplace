import Banner from '../components/Banner';

const Home = () => (
  <div className="flex justify-center p-8 sm:px-4 py-12">
    <div className="w-full minmd:w-4/5 ">
      <Banner
        text="Discover, collect and sell extraordinary NFTs"
        parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        childStyles="md:text-4xl sm:text-2xl sm:text-xl text-left"
      />
    </div>
  </div>
);

export default Home;
