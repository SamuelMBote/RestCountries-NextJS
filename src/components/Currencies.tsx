'use client';

import {ICountry, isCountry} from '@/interfaces/ICountry';
import Link from 'next/link';
import {useParams, usePathname, useRouter} from 'next/navigation';
import React from 'react';

const Currencies = ({countryList}: {countryList: ICountry[]}) => {
  const path = useParams();
  const router = useRouter();

  const currenciesAbbrName = countryList
    .flatMap((country) => {
      if (country && isCountry(country) && country.currencies) {
        if (country.currencies) {
          return Object.entries(country.currencies).map((item) => {
            return {
              curr: item[0],
              name: `${item[1].name}${
                item[1].symbol ? ` - ${item[1].symbol}` : ''
              }`,
            };
          });
        } else return null;
      } else return null;
    })
    .filter((value, index, self) => {
      return (
        index ===
        self.findIndex((t) => {
          return t?.curr === value?.curr && t?.name === value?.name;
        })
      );
    })
    .sort((currA, currB) => {
      if (currA && currB && currA.curr < currB.curr) {
        return -1;
      }
      if (currA && currB && currA.curr < currB.curr) {
        return 1;
      }
      return 0;
    });
  const qtyCurrencies = currenciesAbbrName.length;
  return (
    <section>
      <div className="flex flex-row justify-end items-end m-2">
        <p className="text-gray-700 dark:text-gray-300">
          Currencies Qty: {qtyCurrencies}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gric-cols-5 gap-12 m-4">
        {currenciesAbbrName &&
          currenciesAbbrName.map((currency) => {
            if (currency)
              return (
                <Link
                  key={`${currency.curr} ${currency.name}`}
                  href={`/currencies/${currency.curr}`}
                  className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-center items-center"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {currency.name.split('-').map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </h5>
                  <span className="inline-flex items-center justify-center w-10 h-10 ml-2  text-xs font-semibold text-blue-800 bg-blue-200 rounded-full ">
                    {currency.curr}
                  </span>
                </Link>
              );
          })}
      </div>
    </section>
  );
};

export default Currencies;
