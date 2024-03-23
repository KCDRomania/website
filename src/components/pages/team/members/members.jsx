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
    position: 'Senior Engineering Manager at ING',
    photo: WouterLigtenbergPhoto,
    url: 'https://www.linkedin.com/in/wouterligtenberg',
  },
  {
    name: 'Vlad Fratila',
    position: 'Platform Engineer at Upsider',
    photo: VladFratilaPhoto,
    url: 'https://www.linkedin.com/in/vladfratila/',
  },
  {
    name: 'Romina Druta',
    position: 'Senior Infrastructure Engineer at Visma',
    photo: RominaDrutaPhoto,
    url: 'https://www.linkedin.com/in/romina201/',
  },
  {
    name: 'Victor Varza',
    position: 'TechLead at Adobe',
    photo: VictorVarzaPhoto,
    url: 'https://www.linkedin.com/in/victorvarza',
  },
  {
    name: 'Elif Samedin',
    position: 'DevOps Consultant',
    photo: ElifSamedinPhoto,
    url: 'https://www.linkedin.com/in/elifsamedin/',
  },
  {
    name: 'Catalin Jora',
    position: 'Cloud Consultant at FikaWorks',
    photo: CatalinJoraPhoto,
    url: 'https://www.linkedin.com/in/jocatalin/',
  },
  {
    name: 'Ion Meitoiu',
    position: 'Devops Engineer at Adobe',
    photo: IonMeitoiuPhoto,
    url: 'https://www.linkedin.com/in/ionmeitoiu/',
  },
  {
    name: 'Andrei Pietricica',
    position: 'DevOps Engineer at ING',
    photo: AndreiPietricicaPhoto,
    url: 'https://www.linkedin.com/in/pietriii/',
  },
  {
    name: 'Bogdan Lucaciu',
    position: 'CTO at Adore Me',
    photo: BogdanLucaciuPhoto,
    url: 'https://www.linkedin.com/in/bogdanlucaciu/',
  },
  {
    name: 'Ionu Bradatan',
    position: 'Senior UX Designer at Visma',
    photo: IonutBradatanPhoto,
    url: 'https://www.linkedin.com/in/bradatanionut/',
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
