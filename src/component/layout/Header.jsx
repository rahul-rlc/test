'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Button from '../button/Button';
const dropdownvariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: -10,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
};

const mobileMenuVariant = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.4,
      // delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};
const menuitemVariant = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
};

const links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About us',
    link: '/about',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerType, setHeaderType] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null); // Keep track of active dropdown
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState(null);
  const path = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  // Function to handle dropdown hover
  const handleDropdownHover = (index) => {
    setActiveDropdown(index);
  };

  // Function to handle dropdown leave
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleMobileDropdown = (index) => {
    if (index === mobileMenuDropdown) {
      setMobileMenuDropdown(null);
    } else {
      setMobileMenuDropdown(index);
    }
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 500) {
  //       setHeaderType(1);
  //     } else {
  //       setHeaderType(0);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <header
      className="fixed w-screen top-0 z-50 transition-all bg-white"
      onMouseLeave={handleDropdownLeave}
    >
      <nav
        className="px-6 py-4 mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex ">
          <Link href="/">
            <span className="sr-only">CITY SOALR</span>
            <Image
              width={170}
              height={48}
              src="/assets/logo/logo.svg"
              alt="City Solar"
              className="aspect-[170/48]"
            />
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen ? (
              <BiMenuAltRight
                className="h-6 w-6"
                aria-hidden="true"
                color={headerType === 1 ? '#214842' : 'white'}
                onClick={() => setMobileMenuOpen(true)}
              />
            ) : (
              <AiOutlineClose
                className="h-6 w-6"
                aria-hidden="true"
                color="#253242"
                onClick={() => setMobileMenuOpen(false)}
              />
            )}
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-6">
          {links.map((item, index) => (
            <span key={index} onMouseEnter={() => handleDropdownHover(index)}>
              {item.dropdown ? (
                <div className="relative group">
                  <div
                    className={`flex items-center gap-x-1 text-sm font-inter leading-6 cursor-pointer nav_link ${
                      headerType === 1 ? 'text-primary' : 'text-white'
                    }  focus:outline-none`}
                  >
                    {item.name}
                    <HiOutlineChevronDown
                      className={`h-5 w-5 flex-none ${
                        headerType === 1 ? 'text-primary' : 'text-white'
                      } `}
                      aria-hidden="true"
                    />
                  </div>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        variants={dropdownvariant}
                        animate={'visible'}
                        initial="hidden"
                        exit={'exit'}
                        className={` py-2 absolute right-0 top-full z-10 mt-3  overflow-hidden rounded-sm bg-white shadow-lg ring-1 ring-gray-900/5 `}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.products.map((product) => (
                          <div
                            key={product.name}
                            className="py-2 px-7 text-sm leading-6 hover:bg-gray-50 w-full"
                          >
                            <Link
                              href={product.href}
                              className="block text-gray-900 whitespace-nowrap nav_link"
                            >
                              {product.name}
                            </Link>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.link}
                  className={`text-lg font-semibold leading-6  ${
                    path === item.link ? 'text-lime-500' : 'text-primary'
                  } font-inter`}
                >
                  {item.name}
                </Link>
              )}
            </span>
          ))}
        </div>
        <div className="hidden md:flex">
          <Link href={'/contactus'}>
            <Button text={'Contact Us'} />
          </Link>
        </div>
      </nav>
      <div
        className={`xl:hidden h-screen ${
          mobileMenuOpen ? 'block bg-white' : 'hidden'
        } px-8`}
      >
        <div className="flex flex-col space-y-4 py-6">
          {links.map((item, index) => (
            <span key={index}>
              {item.dropdown ? (
                <div className="relative group">
                  <div
                    className={`flex items-center gap-x-1 text-sm md:text-base  font-inter leading-6 cursor-pointer
         text-primary
                   focus:outline-none`}
                    onClick={() => handleMobileDropdown(index)}
                  >
                    {item.name}
                    <HiOutlineChevronDown
                      className={`h-4 w-4 flex-none text-primary`}
                      aria-hidden="true"
                    />
                  </div>
                  <AnimatePresence>
                    {mobileMenuDropdown === index && (
                      <motion.div
                        key={index}
                        className={`py-2 relative ${
                          mobileMenuOpen ? 'block' : 'hidden'
                        }`}
                        variants={mobileMenuVariant}
                        initial="closed"
                        exit="closed"
                        animate={mobileMenuDropdown ? 'open' : 'closed'}
                      >
                        {item.products.map((product) => (
                          <motion.div
                            {...menuitemVariant}
                            key={product.name}
                            className="py-2 relative px-7 text-sm md:text-base leading-6 hover:bg-gray-50 w-full"
                          >
                            <Link
                              href={product.href}
                              className="block text-primary whitespace-nowrap"
                            >
                              {product.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.link}
                  className={`text-lg font-semibold leading-6 text-primary `}
                >
                  {item.name}
                </Link>
              )}
            </span>
          ))}
          {/* <Link
            href={"/faq"}
            className={`text-sm md:text-base leading-6 text-primary font-inter`}
          >
            Faq
          </Link> */}
        </div>
      </div>
    </header>
  );
}
