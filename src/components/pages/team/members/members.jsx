import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';

import AndreiPietricicaPhoto from './images/andrei-pietricica-photo.png';
import BogdanLucaciuPhoto from './images/bogdan-lucaciu-photo.png';
import CatalinJoraPhoto from './images/catalin-jora-photo.png';
import ElifSamedinPhoto from './images/elif-samedin-photo.png';
import IonMeitoiuPhoto from './images/ion-meitoiu-photo.png';
import IonutBradatanPhoto from './images/ionut-bradatan-photo.png';
import RominaDrutaPhoto from './images/romina-druta-photo.png';
import VictorVarzaPhoto from './images/victor-varza-photo.png';
import VladFratilaPhoto from './images/vlad-fratila-photo.png';
import WouterLigtenbergPhoto from './images/wouter-ligtenberg-photo.png';

const ITEMS = [
  {
    name: 'Wouter Ligtenberg',
    position: 'Cloud Consultant at FikaWorks',
    photo: WouterLigtenbergPhoto,
    url: 'https://www.linkedin.com/in/jocatalin/',
  },
  {
    name: 'Vlad Fratila',
    position: 'Platform Engineering Consultant at ITQ',
    photo: VladFratilaPhoto,
    url: 'https://www.linkedin.com/in/mestredelpino/',
  },
  {
    name: 'Romina Druta',
    position: 'Sr. Platform Engineer at HCS Company',
    photo: RominaDrutaPhoto,
    url: 'https://www.linkedin.com/in/mkerker/',
  },
  {
    name: 'Victor Varza',
    position: 'Solutions Architect at Cloutive',
    photo: VictorVarzaPhoto,
    url: 'https://www.linkedin.com/in/serkancapkan/',
  },
  {
    name: 'Elif Samedin',
    position: 'Owner at Logic Shift',
    photo: ElifSamedinPhoto,
    url: 'https://www.linkedin.com/in/luca-camphuisen/',
  },
  {
    name: 'Catalin Jora',
    position: 'Cloud Consultant at FikaWorks',
    photo: CatalinJoraPhoto,
    url: 'https://www.linkedin.com/in/jocatalin/',
  },
  {
    name: 'Ion Meitoiu',
    position: 'Independent',
    photo: IonMeitoiuPhoto,
    url: 'https://www.linkedin.com/in/mbianchidev/',
  },
  {
    name: 'Andrei Pietricica',
    position: 'Developer relations at Solo.io',
    photo: AndreiPietricicaPhoto,
    url: 'https://www.linkedin.com/in/alessandrovozza/',
  },
  {
    name: 'Bogdan Lucaciu',
    position: 'Lead architect at SUSE',
    photo: BogdanLucaciuPhoto,
    url: 'https://www.linkedin.com/in/william-rizzo/',
  },
  {
    name: 'Ionu Bradatan',
    position: 'DevOps Engineer at Cognizant',
    photo: IonutBradatanPhoto,
    url: 'https://www.linkedin.com/in/rajesh-gunasekaran-4a146224/',
  },
];

const LOGOS = [
  // { icon: ArchCloud, url: 'https://arch.cloud/', iconClassName: 'w-[260px] h-auto' },
];

const Members = () => (
  <section className="safe-paddings relative bg-white pb-40 lg:pb-32 md:py-24 sm:py-16">
    <div className="container">
      <ul className="mt-20 grid grid-cols-4 gap-8 lg:gap-6 md:flex md:flex-wrap md:justify-evenly [@media(max-width:900px)]:mx-auto [@media(max-width:900px)]:max-w-[570px]">
        {ITEMS.map(({ name, position, photo, url }, index) => (
          <li
            className="flex w-[240px] flex-col lg:w-52 md:w-48 sm:w-auto sm:max-w-[200px]"
            key={index}
          >
            <img
              className="w-full"
              src={photo}
              width={240}
              height={284}
              loading="lazy"
              alt={name}
            />

            <p className="mt-2.5 text-2xl font-bold leading-normal text-primary-1 sm:text-left">
              {name}
            </p>

            <span className="mt-1.5 text-primary-1">{position}</span>

            <Link
              className="mt-2.5 text-base font-semibold leading-normal text-blue-1"
              to={url}
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <ul className="mx-auto mt-36 flex flex-wrap justify-center gap-x-4">
      {LOGOS.map(({ icon, url, iconClassName }, index) => (
        <li className="flex min-h-[80px] min-w-[280px] items-center justify-center" key={index}>
          <Link className="flex h-full w-full items-center justify-center" to={url}>
            <img
              className={clsx(iconClassName, 'max-w-[260px] md:max-w-[220px]')}
              src={icon}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
            />
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default Members;
