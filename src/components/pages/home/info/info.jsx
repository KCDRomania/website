import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links.js';

import RoutePic from './images/route-to-event.png';

const Venue = () => (
  <section className="safe-paddings bg-white py-40 pb-20 md:py-24 sm:py-16">
    <div className="container-md text-2xl text-primary-1 sm:text-lg">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <iframe
          width="820"
          height="461"
          src="https://www.youtube.com/embed/XhCeE2V2YfU?autoplay=1&mute=0&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
        />
      </div>
      <br />
      <p>
        <span className="font-bold">Cloud Native Days</span> (CNDs) are global, community-organized
        events that gather adopters and technologists from open source and cloud native communities.
      </p>
      <p className="mt-7">
        This is our second event in <span className="font-bold">Romania</span>, and
        we’re excited to bring the community together. We want to provide a platform for
        professionals and experts from all levels and backgrounds to learn, network, and share their
        knowledge on all things cloud native.
      </p>
      <p className="mb-0 mt-7">
        <span className="font-bold">Date:</span> 5-6 May 2025
      </p>
      <p className="mt-0">
        <span className="font-bold">Location:</span>{' '}
        <Link {...LINKS.googlemaps}>
          <u>Radison Blu</u>
        </Link>
      </p>
      <p className="mt-0">
        Parking info:
        <Link {...LINKS.parkingInfo}>
          <u> Parking Bucharest</u>
        </Link>
      </p>
      <p className="mt-0">
        Metro info: Piata Romana (Roman Square) and follow the Google Maps route.
      </p>
      <br />
      <img src={RoutePic} alt="Route to event" className="rounded-[4px]" />
      <br />
      <br />
      <div className="container text-center">
        <h2 className="text-6xl font-bold leading-denser text-primary-1">What to expect?</h2>
      </div>
      <div className="text-lg leading-normal text-primary-1" style={{ paddingBottom: '7rem' }}>
        <p className="mt-7">
          <span className="font-bold">Technically competent talks</span>, relevant to the larger
          community and coming from end-user.
        </p>
        <p className="mt-7">
          <span className="font-bold">Leading experts </span>from Open Source, DevOps and Cloud
          Native communities.
        </p>
        <p className="mt-7">
          An <span className="font-bold">exceptional venue</span> with enough space to network, join
          talks and great food suiting every taste.
        </p>
        <p className="mt-7">
          Watch all content from the previous event from April 25th on{' '}
          <Link
            className="font-semibold"
            to="https://2024.cloudnativedays.ro"
            theme="blue-underlined"
          >
            Archive 2024
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default Venue;
