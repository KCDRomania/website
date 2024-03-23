import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links.js';

const TITLE = 'Schedule for <time class="text-blue-1 xs:block">25 April, 2024</time>';
const DESCRIPTION =
  'We hope you had a great time attending this event. Please fill in the survey and have a look at the photos using the links below.';

const Hero = () => (
  <section className="safe-paddings pt-24 pb-10 lg:pt-[4.5rem] md:pt-16 md:pb-4 sm:py-8">
    <div className="container mt-4 text-center text-primary-1 sm:px-7">
      <h1
        className="text-6xl font-bold leading-denser tracking-[-0.01em] md:text-4xl"
        dangerouslySetInnerHTML={{ __html: TITLE }}
      />
      <p className="mx-auto mt-9 max-w-[865px] text-2xl leading-normal md:mt-6 md:text-xl sm:text-lg">
        {DESCRIPTION}
      </p>
      <Button
        className="mt-10 shadow-xl hover:bg-blue-2 hover:shadow-[0px_15px_30px_#adadad] md:mt-8 xs:mt-7 xs:w-full"
        size="lg"
        theme="blue"
        {...LINKS.photos}
      >
        Photos
      </Button>
      <Button
        className="mt-7 ml-3 text-primary-1 shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad] xs:ml-0 xs:w-full"
        theme="primary"
        size="lg"
        {...LINKS.survey}
      >
        Survey
      </Button>
    </div>
  </section>
);

export default Hero;
