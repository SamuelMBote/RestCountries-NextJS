import {ICountry} from '@/interfaces/ICountry';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardCountry = ({country}: {country: ICountry}) => {
  return (
    <div className="flex flex-col justify-between  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/${country.name.common}`} className="hover:opacity-70">
        <Image
          className="rounded-t-lg"
          src={country.flags.svg}
          alt={country.flags.alt || ''}
          width={640}
          height={320}
        />
      </Link>
      <div className="p-5 flex flex-col items-start justify-end ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {country.name.common}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {country.name.official}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          [{country.region}]
        </p>
        <Link
          href={`/${country.name.common}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          More about
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CardCountry;
