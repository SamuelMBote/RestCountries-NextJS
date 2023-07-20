'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = ({
  theme,
}: {
  theme?: {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) => {
  return (
    <nav className="bg-blue-700 dark:bg-gray-700 h-14 max-w-full">
      <div className="flex flex-row items-end justify-between gap-2 p-4">
        <div>
          <Link className="text-white text-lg" href={'/'}>
            <Image src={'/mundi.png'} alt="Mapa Mundi" width={80} height={10} />
          </Link>
        </div>

        <div className=" flex flex-row justify-between gap-4">
          <div>
            <Link
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
              href={'/currencies'}
            >
              by Currencies
            </Link>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              value={theme ? 'light' : 'dark'}
              onClick={(e) => {
                if (theme) theme.setTheme(!theme.theme);
              }}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-white dark:text-gray-300">
              {theme && theme.theme ? 'Light' : 'Dark'}
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Header;
