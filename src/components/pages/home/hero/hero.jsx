import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links.js';

import illustration from './images/romania.png';

const TITLE = 'Kubernetes Community Days Romania';

const DESCRIPTION =
  'Thanks for attending KCD Romania 2024. We hope you enjoyed the event! Please fill in the survey and have a look at our photos.';

const Hero = () => (
  <section className="safe-paddings overflow-hidden bg-[#EDC3C7] bg-opacity-10 pt-28 pb-40 lg:pb-32 md:pt-24 md:pb-[500px] sm:pb-[520px] [@media(max-width:600px)]:pb-[430px] [@media(max-width:460px)]:pb-[420px]">
    <div className="container relative md:flex md:flex-col">
      <div className="absolute top-0 -left-[40%] h-[566px] w-[566px] translate-x-1/2 bg-white blur-[100px] md:-left-[30%] md:h-[350px] md:w-[350px]" />
      <div className="relative md:flex md:flex-col md:items-center md:text-center">
        <time
          className="rounded-3xl bg-yellow px-4 py-2 text-sm font-bold leading-none text-black"
          dateTime="2024-06-14"
        >
          Thanks for joining us!
        </time>
        <h1 className="mt-3 max-w-[570px] text-8xl font-bold leading-denser text-primary-1 lg:max-w-[500px] sm:text-7xl">
          {TITLE}
        </h1>
        <p className="mt-5 max-w-[500px] text-lg leading-normal text-primary-1 lg:max-w-[500px]">
          {DESCRIPTION}
        </p>
        <Button
          className="mt-7 text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
          theme="blue"
          size="lg"
          {...LINKS.photos}
        >
          Photos
        </Button>
        <Button
          className="mt-7 ml-3 text-primary-1 shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
          theme="primary"
          size="lg"
          {...LINKS.survey}
        >
          Survey
        </Button>
      </div>
      <img
        className="absolute -top-44 -left-32 translate-x-1/2 xl:-top-28 xl:-left-8 xl:w-full xl:max-w-[920px] lg:left-[38%] lg:-top-16 lg:w-[750px] lg:translate-x-1 md:top-[37%] md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 sm:top-[27%] [@media(max-width:600px)]:top-[47%] [@media(max-width:600px)]:w-[600px] [@media(max-width:460px)]:top-[65%] [@media(max-width:460px)]:w-[490px]"
        src={illustration}
        width={1508}
        height="auto"
        loading="eager"
        alt="Illustration"
      />
    </div>
  </section>
);

export default Hero;
