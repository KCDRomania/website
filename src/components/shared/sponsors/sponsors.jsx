import clsx from 'clsx';
import React from 'react';

// import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
// import Adobe from 'icons/adobe-logo.png';
// import AdoreMe from 'icons/adoreme-logo.png';
// import CloudHero from 'icons/cloudhero-logo.png';
// import Dynatrace from 'icons/dynatrace-logo.png';
// import EvolveMedia from 'icons/evolvemedia.png';
// import FikaWorks from 'icons/fikaworks-logo.png';
// import GoogleCloud from 'icons/google-cloud.svg';
// import IngHubs from 'icons/inghubs.png';
// import Kluger from 'icons/kluger-logo.png';
// import Stripe from 'icons/stripe-logo.png';
// import Systematic from 'icons/systematic-logo.png';
// import VictoriaSecrets from 'icons/victoriasecrets-logo.png';

const TITLE = 'Sponsors';

// export default Sponsors;

const ITEMS = [
  {
    title: 'Diamond',
    logos: [
      // { icon: GoogleCloud, url: 'https://www.google.com/' }
    ],
    cardClassname: 'min-w-[488px] max-w-[330px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px]',
    iconClassname: 'max-w-[390px] sm:max-w-[350px]',
  },
  {
    title: 'Gold',
    logos: [
      // { icon: Adobe, url: 'https://www.adobe.com/' },
      // { icon: IngHubs, url: 'https://inghubsromania.com/' },
      // { icon: CloudHero, url: 'https://cloudhero.io/' },
      // { icon: AdoreMe, url: 'https://www.adoreme.com/' },
      // { icon: Stripe, url: 'https://stripe.com' },
    ],
    cardClassname: 'min-w-[488px] max-w-[330px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px]',
    iconClassname: 'max-w-[390px] sm:max-w-[350px]',
  },
  {
    title: 'Silver',
    logos: [
      // { icon: Dynatrace, url: 'https://www.dynatrace.com/' },
      // { icon: Systematic, url: 'https://systematic.com/' },
    ],
    cardClassname: 'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px]',
    iconClassname: 'max-w-[330px] sm:min-w-[290px]',
  },
  {
    title: 'Bronze',
    logos: [
      // { icon: Kluger, url: 'https://www.kluger.ro/' },
      // { icon: VictoriaSecrets, url: 'https://www.victoriassecret.com/' },
      // { icon: FikaWorks, url: 'https://fika.works/' },
      // { icon: EvolveMedia, url: 'https://evolvemedia.co/' },
    ],
    cardClassname: 'min-w-[280px] min-h-[104px] sm:min-w-[250px] sm:min-h-[94px]',
    iconClassname: 'max-w-[330px] sm:min-w-[290px]',
  },
];

const Sponsors = () => (
  <section className="safe-paddings relative bg-white sm:pb-16">
    <div className="container-md text-center text-primary-1">
      <h2 className="text-6xl font-bold leading-denser text-primary-1" id={LINKS.sponsors.id}>
        {TITLE}
      </h2>
      <div style={{ marginTop: '4vh', marginBottom: '10vh' }} />
      <ul className="mt-16 flex flex-col ">
        {ITEMS.map(({ title, logos, cardClassname, iconClassname }, index) => (
          <li className="" key={index}>
            <p
              className="text-center text-4xl font-bold leading-normal text-primary-1"
              style={{
                background:
                  'linear-gradient(to right, #FFFFFF 0%, #7b79791f 30%, #7b79791f 70%, #FFFFFF 100%)',
                borderRadius: '10px',
              }}
            >
              {title}
            </p>

            <ul className="mb-[70px] mt-10 flex flex-wrap justify-center gap-x-8 xl:gap-y-6">
              {logos.map(({ icon, url }, index) => (
                <li className={clsx('flex items-center justify-center', cardClassname)} key={index}>
                  <Link
                    className="flex h-full w-fit items-center justify-center"
                    to={url}
                    target="_blank"
                  >
                    <img
                      className={clsx('h-auto w-3/4', iconClassname)}
                      src={icon}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="sponsor-logo"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Sponsors;
