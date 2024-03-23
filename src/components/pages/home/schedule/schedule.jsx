import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

import illustration from './images/section-illustration.jpg';

const TITLE = 'Schedule';

const DESCRIPTION =
  "Get ready for an action-packed day. With two tracks and more than 15 sessions to choose from, you'll have plenty of opportunities to learn from experts in the field. The whole event will be held in English.";

const Schedule = () => (
  <section className="safe-paddings relative bg-white pb-40 lg:pb-32 md:py-24 sm:py-16">
    <div className="container flex items-center justify-between lg:flex-col">
      <div className="text-primary-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center">
        <h2
          className="min-w-[428px] max-w-[428px] text-6xl font-bold leading-tight lg:min-w-0 lg:max-w-[800px]"
          id={LINKS.schedule.id}
        >
          {TITLE}
        </h2>
        <p className="mt-5 max-w-[488px] text-lg leading-normal lg:max-w-[650px]">{DESCRIPTION}</p>
        <Button className="mt-7" to="/schedule" theme="primary" size="lg">
          View full schedule
        </Button>
      </div>
      <img
        className="mr-16 xl:ml-10 lg:mx-auto lg:mt-10 lg:h-auto sm:max-h-[200px]"
        src={illustration}
        width={520}
        height={191}
        loading="lazy"
        alt=""
      />
    </div>
  </section>
);

export default Schedule;
