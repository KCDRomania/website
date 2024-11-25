import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links.js';

import illustration from './images/romania.svg';

const TITLE = 'Cloud Native Days Romania';

const DESCRIPTION =
  'The Kubernetes & Cloud Native community will gather at the Radison Blu in Bucharest, Romania. Join us for one day technical event loaded with exciting talks and networking opportunities. Cloud Native Days Romania is aimed at developers, platform people, and other IT professionals with an interest in cloud native technologies.';
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
          5-6 MAY 2025
        </span>
        <h1 className="mt-3 min-w-[38rem] max-w-[570px] text-8xl font-bold leading-denser text-primary-1 lg:max-w-[500px] md:min-w-min sm:text-7xl">
          {TITLE}
        </h1>
        <p className="mt-5 max-w-[500px] text-lg leading-normal text-primary-1 lg:max-w-[500px]">
          {DESCRIPTION}
        </p>
        <div className="relative md:flex md:flex-col md:items-center md:text-center">
          <Button
            className="mt-7 text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
            theme="blue"
            size="lg"
            {...LINKS.sponsorProspectus}
          >
            Sponsor prospectus
          </Button>
          <Button
            className="ml-3 mt-7 text-primary-1 shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
            theme="primary"
            size="lg"
            {...LINKS.cfp}
          >
            Call For Proposals (CFP)
          </Button>
        </div>
        {/* <div style={{ marginTop: '3vh' }}>
          <Button
            className="border-nonemd:hidden group relative inline-flex w-fit items-center justify-center overflow-hidden"
            theme="primary"
            size="lg"
            {...LINKS.tickets}
          >
            <span className="absolute h-full w-full bg-gradient-to-br from-[#3333ff] via-[#3333ff] to-[#3333ff] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]" />
            <span className="bg-gray-900 duration-400 relative rounded-md px-6 py-3 transition-all ease-out group-hover:bg-opacity-0">
              <span className="relative font-bold text-white">Buy tickets</span>
            </span>
          </Button>
        </div> */}
      </div>
      <img
        className="ml-[-5vw] h-[40rem] object-contain 2xl:-mt-20 md:mt-1 md:h-96"
        style={{ marginLeft: '-5rem', width: '80%' }}
        src={illustration}
        loading="eager"
        alt="Illustration"
        className="ml-[-5vw] h-[40rem] object-contain 2xl:-mt-20 md:mt-1 md:h-96"
        style={{ marginLeft: '0rem', width: '69%' }}
        src={illustration}
        loading="eager"
        alt="Illustration"
      />
    </div>
  </section>
);
export default Hero;
