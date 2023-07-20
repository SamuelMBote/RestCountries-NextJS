import {ICountry} from '@/interfaces/ICountry';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Country = ({country}: {country: ICountry}) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="py-4 px-4 mx-auto max-w-screen-lg text-center ">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {country.name.common}
          </h1>
          <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            {country.name.official}
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-2">
            <Link
              href={`regions/${country.region}`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              {`[${country.region}]`}
            </Link>
            <Link
              href={`regions/${country.region}/subregions/${country.subregion}`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              {`[${country.subregion}]`}
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {(country.flags.png || country.flags.svg) && (
            <div className="flex flex-col items-center">
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                Flag
              </p>
              <Image
                src={country.flags.svg || country.flags.png}
                alt={country.flags.alt}
                width={480}
                height={320}
              />
            </div>
          )}
          {(country.coatOfArms.png || country.coatOfArms.svg) && (
            <div className="flex flex-col items-center">
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                Coat of Arms
              </p>
              <Image
                src={country.coatOfArms.svg || country.coatOfArms.png}
                alt={country.flags.alt}
                width={320}
                height={320}
              />
            </div>
          )}
        </div>
      </section>
      {/*SEÇÃO DE DADOS 1*/}
      <section className="bg-white dark:bg-gray-900 ">
        <div className="grid grid-cols-1 md:grid-cols-2 my-5">
          {/*INICIO COLUNA 1*/}
          <div className="flex flex-col items-center">
            <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Native Name
                </dt>

                {Object.entries(country.name.nativeName).map((item) => {
                  return (
                    <div
                      key={item[0]}
                      className="flex flex-row items-center justify-start gap-3 "
                    >
                      <p className="text-md w-10">{item[0]}</p>
                      <div className="flex flex-col items-start justify-start">
                        <dd className="text-lg font-semibold">
                          {item[1].common}
                        </dd>
                        <dd className="text-lg font-semibold">
                          {item[1].official}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Capital
                </dt>
                <dd className="text-lg font-semibold">{country.capital}</dd>
              </div>
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Independent
                </dt>
                <dd
                  className={`text-lg font-semibold ${
                    country.independent ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {country.independent ? 'Yes' : 'No'}
                </dd>
              </div>
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Currencies
                </dt>

                {Object.entries(country.currencies).map((item) => {
                  return (
                    <div
                      key={item[0]}
                      className="flex flex-row items-center justify-start gap-3"
                    >
                      {' '}
                      <Link href={`/currencies/${item[0]}`}>
                        <p className="text-md w-10">{item[0]}</p>
                      </Link>
                      <div className="flex flex-col items-start justify-start">
                        <Link href={`/currencies/${item[0]}`}>
                          <dd className="text-lg font-semibold">
                            {item[1].symbol}
                          </dd>
                          <dd className="text-lg font-semibold">
                            {item[1].name}
                          </dd>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Languages
                </dt>

                {Object.entries(country.languages).map((item) => {
                  return (
                    <div
                      key={item[0]}
                      className="flex flex-row items-center justify-start gap-3 "
                    >
                      <div className="flex flex-col items-start justify-start">
                        <dd className="text-lg font-semibold">{item[1]}</dd>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Population
                </dt>
                <dd className="text-lg font-semibold">{country.population}</dd>
              </div>
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Capital Info
                </dt>
                <dd className="text-lg font-semibold">
                  {`Lat:${country.capitalInfo.latlng[0]} Lon:${country.capitalInfo.latlng[1]}`}
                </dd>
              </div>
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Timezones
                </dt>

                {country.timezones.map((item) => {
                  return (
                    <div
                      key={item}
                      className="flex flex-row items-center justify-start gap-3"
                    >
                      <div className="flex flex-col items-start justify-start">
                        <dd className="text-lg font-semibold">{item}</dd>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Demonymns
                </dt>

                {Object.entries(country.demonyms).map((item) => {
                  return (
                    <div
                      key={item[0]}
                      className="flex flex-row items-center justify-start gap-3 mb-4"
                    >
                      <p className="text-md w-10">{item[0]}</p>
                      <div className="flex flex-col items-start justify-start">
                        <dd className="text-lg font-semibold">{item[1].f}</dd>
                        <dd className="text-lg font-semibold">{item[1].m}</dd>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  International Direct Distance Dialin
                </dt>

                {Object.entries(country.idd).map((item) => {
                  return (
                    <div
                      key={item[0]}
                      className="flex flex-row items-center justify-start gap-3 mb-4"
                    >
                      <p className="text-md w-10">{item[0]}</p>
                      <div className="flex flex-col items-start justify-start">
                        {typeof item[1] === 'string' && (
                          <dd className="text-lg font-semibold">{item[1]}</dd>
                        )}
                        {item[1] instanceof Array && (
                          <dd className="ml-2 text-lg font-semibold">
                            {item[1].join().toString()}
                          </dd>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </dl>
          </div>
          {/*FIM COLUNA 1*/}
          {/*INICIO COLUNA 2*/}
          <div className="flex flex-col items-center">
            <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Translations
                </dt>

                {Object.entries(country.translations).map((item) => {
                  return (
                    <div
                      key={item[0]}
                      className="flex flex-row items-center justify-start gap-3 mb-4"
                    >
                      <p className="text-md w-10">{item[0]}</p>
                      <div className="flex flex-col items-start justify-start">
                        <dd className="text-lg font-semibold">
                          {item[1].common}
                        </dd>
                        <dd className="text-lg font-semibold">
                          {item[1].official}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </div>
            </dl>
          </div>
          {/*FIM COLUNA 2*/}
        </div>
      </section>
    </div>
  );
};

export default Country;
