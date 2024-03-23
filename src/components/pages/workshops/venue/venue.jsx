import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';

import CardIllusrtation from './images/card-illustration.jpg';

const TITLE = 'Venue information';

const Venue = () => (
  <section className="safe-paddings bg-white pt-40 pb-48 md:py-24 sm:py-16">
    <div className="container-md">
      <h2 className="text-center text-6xl font-bold leading-tight text-primary-1">{TITLE}</h2>
      <div className="mt-14 flex justify-between lg:justify-around md:flex-col sm:items-center">
        <div className="grid max-w-[384px] grid-cols-1 rounded shadow-[0_14px_40px_#CCCCCC] md:max-w-none md:grid-cols-2 sm:max-w-[500px] sm:grid-cols-1">
          <img
            className="min-w-full md:col-span-1 md:col-start-1 md:row-start-1 md:h-full"
            src={CardIllusrtation}
            width={384}
            height="auto"
            loading="eager"
            alt="card-illustration"
          />
          <div className="pt-5 pb-8 pl-10 pr-16 leading-normal md:row-start-1 md:px-6 sm:row-start-2">
            <Link
              to="https://goo.gl/maps/ooQufQWKzaRM286Z7"
              className="text-2xl font-semibold sm:text-xl"
              theme="primary"
            >
              Google HQ <br />
              at Romania Europaallee
            </Link>
            <address className="mt-5 text-lg not-italic text-[#262F59] opacity-60 sm:text-lg">
              Google EURF <br /> Europaallee 36 <br /> 8004 Romania
            </address>
          </div>
        </div>

        <div className="mt-8 w-[520px] text-lg leading-normal text-primary-1 xl:max-w-[470px] lg:ml-8 lg:max-w-[530px] md:ml-0 md:mt-5 md:w-full md:max-w-none sm:text-lg">
          <p>
            The Kubernetes Community Days in Romania will be held at the Radison Blu Hotel, a modern
            and convenient location near the metro station. Attendees can expect to enjoy a variety
            of vegetarian and vegan food options throughout the day.
          </p>
          <p className="mt-5">
            Don’t miss out on the opportunity to connect with fellow attendees and continue the
            conversation at the networking Apéro.
          </p>
          <p className="mt-5 font-bold">We can't wait to see you there!</p>

          <Button className="mt-7 w-2/3" to="https://tickets.kcdzurich.ch/" size="lg" theme="blue">
            Buy tickets
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Venue;
