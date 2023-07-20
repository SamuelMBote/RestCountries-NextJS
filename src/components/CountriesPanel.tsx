'use client';
import {ICountry, isCountry} from '@/interfaces/ICountry';
import React from 'react';
import CardCountry from './CardCountry';

const CountriesPanel = ({countryList}: {countryList: ICountry[]}) => {
  const countriesQty: number = countryList.length;
  return (
    <>
      <div className="flex flex-row justify-end items-end m-2">
        <p className="text-gray-700 dark:text-gray-300">
          Countries Qty: {countriesQty}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {countryList
          .sort((countryA, countryB) => {
            if (countryA.name.common < countryB.name.common) {
              return -1;
            }
            if (countryA.name.common > countryB.name.common) {
              return 1;
            }
            return 0;
          })
          .map((country) => {
            if (country && isCountry(country))
              return (
                <CardCountry key={country.name.official} country={country} />
              );
          })}
      </div>
    </>
  );
};

export default CountriesPanel;
