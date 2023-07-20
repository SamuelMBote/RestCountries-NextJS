'use client';

import {ICountry, isCountry} from '@/interfaces/ICountry';

import {useParams, usePathname, useRouter} from 'next/navigation';
import React from 'react';

const RegionButtonsForPage = ({
  countryList,
  type,
}: {
  countryList: ICountry[];
  type: 'region' | 'subregion';
}) => {
  const path = useParams();
  const router = useRouter();

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
    <section>
      <p className="m-1 text-gray-900 dark:text-white text-center">
        Choose {type}:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-4">
        {regions.map((region) => {
          return (
            <a
              onClick={(e) => {
                e.preventDefault();
                if (type === 'region') {
                  router.push(`/regions/${region.region}`);
                }
                if (type === 'subregion') {
                  router.push(
                    `/regions/${path.region}/subregions/${region.region}`,
                  );
                }
              }}
              key={region.region}
              href={`/regions/${region.region}`}
              className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-center items-center"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {region.region}
              </h5>
              <span className="inline-flex items-center justify-center w-10 h-10 ml-2  text-xs font-semibold text-blue-800 bg-blue-200 rounded-full ">
                {region.qtd}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default RegionButtonsForPage;
