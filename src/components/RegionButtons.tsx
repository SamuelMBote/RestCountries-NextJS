'use client';

import {ICountry, isCountry} from '@/interfaces/ICountry';
import {useParams, useRouter} from 'next/navigation';
import React from 'react';

const RegionButtons = ({
  countryList,
  type,
}: {
  countryList: ICountry[];
  type: 'region' | 'subregion';
}) => {
  const router = useRouter();
  const path = useParams();

  const objectRegionQTD = countryList
    .flatMap((country) => {
      if (country && isCountry(country) && typeof country[type] === 'string') {
        const region = country[type];
        const qtd = 1;
        return {region, qtd};
      } else {
        return null;
      }
    })
    .reduce<{[key: string]: any}>((acc, region) => {
      if (region) {
        acc[region.region] = (acc[region.region] || 0) + region.qtd;
      }
      return acc;
    }, {});
  const regions = Object.entries(objectRegionQTD).map(([region, qtd]) => {
    return {region, qtd};
  });
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="m-1  text-gray-900 dark:text-white">Choose {type}:</p>
      <div className="flex flex-row gap-2 m-4 flex-wrap">
        {regions.map((region) => {
          return (
            <button
              key={region.region}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                if (type === 'region') {
                  router.push(`/regions/${region.region}`);
                }
                if (type === 'subregion') {
                  router.push(`${path.region}/subregions/${region.region}`);
                }
              }}
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {region.region}
              <span className="inline-flex items-center justify-center w-5 h-5 ml-2  text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {region.qtd}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RegionButtons;
