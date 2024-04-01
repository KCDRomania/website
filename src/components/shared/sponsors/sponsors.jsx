import clsx from 'clsx';
import React from 'react';

// import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import GoogleCloud from 'icons/edb.svg';
import Adobe from 'icons/edb.svg';
import IngHubs from 'icons/edb.svg';
import CloudHero from 'icons/edb.svg';
import AdoreMe from 'icons/edb.svg';
import Stripe from 'icons/edb.svg';
import Dynatrace from 'icons/edb.svg';
import Systematic from 'icons/edb.svg';
import VictoriaSecrets from 'icons/edb.svg';
import Kluger from 'icons/edb.svg';

const TITLE = 'Sponsors';

// const ITEMS = [
//   {
//     logos: [
//       { icon: GoogleCloud, url: 'https://www.google.com/' },
//       { icon: Adobe, url: 'https://www.adobe.com/' },
//       { icon: IngHubs, url: 'https://inghubsromania.com/' },
//       { icon: CloudHero, url: 'https://cloudhero.io/' },
//       { icon: AdoreMe, url: 'https://www.adoreme.com/' },
//       { icon: Stripe, url: 'https://stripe.com' },
//       { icon: Dynatrace, url: 'https://www.dynatrace.com/' },
//       { icon: Systematic, url: 'https://systematic.com/' },
//       { icon: VictoriaSecrets, url: 'https://www.victoriassecret.com/' },
//       { icon: Kluger, url: 'https://www.kluger.ro/' },
//     ],
//     cardClassname:
//       'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px] xs:min-w-fit xs:max-w-full',
//     iconClassname: 'max-w-[330px] sm:min-w-[290px]',
//   },
// ];

// const Sponsors = () => (
//   <section className="safe-paddings relative bg-white py-16 sm:py-16">
//     <div className="container text-center">
//       <h2 className="text-6xl font-bold leading-denser text-primary-1" id={LINKS.sponsors.id}>
//         {TITLE}
//       </h2>
//       {/* <p className="mx-auto mt-6 max-w-[800px] text-lg leading-normal text-primary-1">
//         <strong>Kubernetes Community Days</strong> is more than an event; it's a community-driven
//         movement, and we invite you to be a vital contributor to its success. Connect with us today
//         to explore how you can make a lasting impact on the future of cloud-native computing. Please
//         see our{' '}
//         <a href="/sponsor">
//           <em>
//             <i>
//               <u>sponsorship prospectus</u>
//             </i>
//           </em>
//         </a>{' '}
//         for more information.
//       </p>
//       <Button className="mt-7" to="mailto:kcdromania@gmail.com" theme="primary" size="lg">
//         Contact us
//       </Button> */}

//       <ul className="mt-2 flex flex-col">
//         {ITEMS.map(({ logos, cardClassname, iconClassname }, index) => (
//           <li className="" key={index}>
//             <ul className="mb-[70px] mt-2 flex flex-wrap justify-center gap-x-8 xl:gap-y-6">
//               {logos.map(({ icon, url }, index) => (
//                 <li className={clsx('flex items-center justify-center', cardClassname)} key={index}>
//                   <Link
//                     className="flex h-full w-fit items-center justify-center"
//                     to={url}
//                     target="_blank"
//                   >
//                     <img
//                       className={clsx('h-auto w-auto xs:max-w-full', iconClassname)}
//                       src={icon}
//                       width="auto"
//                       height="auto"
//                       loading="lazy"
//                       alt="sponsor-logo"
//                     />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </section>
// );

// export default Sponsors;

const ITEMS = [
  {
    title: 'Diamond',
    logos: [{ icon: GoogleCloud, url: 'https://www.google.com/' }],
    cardClassname: 'min-w-[488px] max-w-[330px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px]',
    iconClassname: 'max-w-[390px] sm:max-w-[350px]',
  },
  {
    title: 'Gold',
    logos: [
      { icon: Adobe, url: 'https://www.adobe.com/' },
      { icon: IngHubs, url: 'https://inghubsromania.com/' },
      { icon: CloudHero, url: 'https://cloudhero.io/' },
      { icon: AdoreMe, url: 'https://www.adoreme.com/' },
      { icon: Stripe, url: 'https://stripe.com' },
    ],
    cardClassname: 'min-w-[488px] max-w-[330px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px]',
    iconClassname: 'max-w-[390px] sm:max-w-[350px]',
  },
  {
    title: 'Silver',
    logos: [
      { icon: Dynatrace, url: 'https://www.dynatrace.com/' },
      { icon: Systematic, url: 'https://systematic.com/' },
    ],
    cardClassname: 'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px]',
    iconClassname: 'max-w-[330px] sm:min-w-[290px]',
  },
  {
    title: 'Bronze',
    logos: [
      { icon: Kluger, url: 'https://www.kluger.ro/' },
      { icon: VictoriaSecrets, url: 'https://www.victoriassecret.com/' },
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
