import React from 'react';

import Link from 'components/shared/link';
import AcendLogo from 'icons/acend-logo.inline.svg';

const DESCRIPTION =
  'As a knowledge platform, acend accompanies engineers and their businesses across new technological frontiers. We offer extraordinary, inspiring and practice-oriented teaching and learning experiences.';

const Acend = () => (
  <section className="safe-paddings relative bg-[#EDC3C7] bg-opacity-10 py-20">
    <div className="container">
      <div className="absolute top-0 left-[18%] h-[268px] w-[268px] translate-x-1/2 bg-white blur-[100px]" />
      <div className="relative flex flex-wrap justify-evenly sm:justify-center">
        <Link className="h-fit w-fit" to="https://acend.ch/" target="_blank">
          <AcendLogo className="h-[87px] w-[313px]" />
        </Link>
        <p className="max-w-[588px] text-lg leading-normal text-primary-1 sm:mt-5">{DESCRIPTION}</p>
      </div>
    </div>
  </section>
);

export default Acend;
