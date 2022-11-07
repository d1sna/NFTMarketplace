import Link from 'next/link';

const NavItem = ({
  item, active, setActive, index, setIsOpen = () => {},
}) => (
  <li
    key={index}
    onClick={() => { setActive(item.name); setIsOpen(false); }}
    className={`flex flex-row items-center text-base dark:hover:text-white hover:text-nft-dark mx-3 font-semibold text-base ${active === item.name ? 'dark:text-white text-nft-black-1' : 'dark:text-nft-gray-3 text-nft-gray-2 '}`}
  >
    <Link href={item.link}>
      <div>{item.name}</div>
    </Link>
  </li>
);

export default NavItem;
