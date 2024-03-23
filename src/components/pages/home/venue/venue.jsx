import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links.js';

import RoutePic from './images/route-to-event.png';

const Venue = () => (
  <section className="safe-paddings bg-white py-40 pb-20 md:py-24 sm:py-16">
    <div className="container-md text-2xl text-primary-1 sm:text-lg">
      <p>
        <span className="font-bold">Kubernetes Community Days</span> (KCDs) are global,
        community-organized events that gather adopters and technologists from open source and cloud
        native communities, supported by the Cloud Native Computing Foundation (CNCF).
      </p>
      <p className="mt-7">
        This is the first KCD in <span className="font-bold">Romania</span>, and we’re excited to
        bring the community together. We want to provide a platform for professionals and experts
        from all levels and backgrounds to learn, network, and share their knowledge on all things
        cloud native.
      </p>
      <p className="mb-0 mt-7">
        <span className="font-bold">Date:</span> April 25th, 2024
      </p>
      <p className="mt-0">
        <span className="font-bold">Location:</span>{' '}
        <Link {...LINKS.googlemaps}>
          <u>Radison Blu</u>
        </Link>
        , for parking info view
        <Link {...LINKS.parkingInfo}>
          <u> Parking Bucharest</u>
        </Link>
      </p>
      <br />
      <img src={RoutePic} alt="Route to event" className="rounded-[4px]" />
      {/* <p className="mt-7">
        Watch all the speakers’ sessions videos from December 1, 2024 on{' '}
        <Link className="font-semibold" to="/archive" theme="blue-underlined">
          Archive page
        </Link>
        !
      </p> */}
    </div>
  </section>
);

export default Venue;
