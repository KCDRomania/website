import React from 'react';

import Link from 'components/shared/link';

import CloudNative from './images/cloudnative.svg';

const TITLE = 'Supported By';

const Supported = () => (
  <section className="safe-paddings relative bg-white pt-24 pb-16 lg:pb-40 md:pb-32 sm:pb-24 sm:pt-16">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1">{TITLE}</h2>

      <ul className="mx-auto mt-20 flex w-full flex-wrap justify-center gap-y-14 gap-x-8">
        <li className="flex min-h-[80px] w-full items-center justify-center">
          <Link className="flex h-full w-4/5 items-center justify-center" to="https://cncf.io">
            <img
              src={CloudNative}
              className="w-full"
              alt="CNCF Logo"
              // width="100%"
              // height="auto"
            />
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default Supported;
