import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links.js';

import illustration from './images/romania.svg';

const TITLE = 'Kubernetes Community Days Romania';

const DESCRIPTION =
  'The Kubernetes & Cloud Native community will gather at the Radison Blu in Bucharest, Romania. Join us for one day technical event loaded with exciting talks and networking opportunities. KCD Romania is aimed at developers, platform people, and other IT professionals with an interest in cloud native technologies. This community event is supported by the CNCF.';
const Hero = () => (
  /*
    const cloudsBack = {
      animationData: cloudsAnimation, // Your back animation JSON
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  
    const { View: View, play: playBack } = useLottie(cloudsBack);
  
    useEffect(() => {
      playBack();
    }, [playBack]);
  
    */

  <section className="safe-paddings overflow-hidden bg-opacity-10 pt-28 md:pt-24">
    <div className="container flex flex-row md:flex-col md:items-center md:text-center">
      <div className="flex flex-col md:items-center md:text-center">
        <span className="w-fit rounded-3xl bg-yellow px-4 py-2 text-sm font-bold leading-none text-black">
          APRIL 25th, 2024
        </span>
        <h1 className="mt-3 min-w-[38rem] max-w-[570px] text-8xl font-bold leading-denser text-primary-1 lg:max-w-[500px] md:min-w-min sm:text-7xl">
          {TITLE}
        </h1>
        <p className="mt-5 max-w-[500px] text-lg leading-normal text-primary-1 lg:max-w-[500px]">
          {DESCRIPTION}
        </p>
        <div style={{ marginTop: '3vh' }}>
          <Button
            className="border-nonemd:hidden group relative inline-flex w-fit items-center justify-center overflow-hidden"
            theme="primary"
            size="lg"
            {...LINKS.tickets}
          >
            <span className="absolute h-full w-full bg-gradient-to-br from-[#3333ff] via-[#3333ff] to-[#3333ff] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]" />
            <span className="bg-gray-900 duration-400 relative rounded-md px-6 py-3 transition-all ease-out group-hover:bg-opacity-0">
              <span className="relative font-bold text-white">Get your tickets now</span>
            </span>
          </Button>
        </div>
      </div>
      <img
        // className="ml-[-5vw] h-[40rem] object-contain 2xl:-mt-20 md:mt-1 md:h-96"
        // style={{ marginLeft: '-5rem', width: '80%' }}
        // src={illustration}
        // loading="eager"
        // alt="Illustration"
        className="ml-[-5vw] h-[40rem] scale-125 object-contain 2xl:-mt-20 md:mt-1 md:h-96"
        style={{ marginLeft: '0rem', width: '69%' }}
        src={illustration}
        loading="eager"
        alt="Illustration"
      />
    </div>
  </section>
);
export default Hero;
