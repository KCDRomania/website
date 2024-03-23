import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';

import AlessandroVozzaPhoto from './images/alessandro-vozza-photo.png';
import CarlosMestrePhoto from './images/carlos-mestre-photo.jpeg';
import CatalinJoraPhoto from './images/catalin-jora-photo.png';
import FahdEkadioinPhoto from './images/fahd-ekadioin-photo.png';
import KarlaFeijooPhoto from './images/karla-feijoo-photo.png';
import LucaCamphuisenPhoto from './images/luca-camphuisen-photo.png';
import MarcelKerkerPhoto from './images/marcel-kerker-photo.png';
import MatteoBianchiPhoto from './images/matteo-bianchi-photo.png';
import MegStefouliPhoto from './images/meg-stefouli-photo.png';
import PabloMusaPhoto from './images/pablo-musa-photo.png';
import PavelChunyayevPhoto from './images/pavel-chunyayev-photo.png';
import RajeshGunasekaranPhoto from './images/rajesh-gunasekaran-photo.png';
import RonaldKersPhoto from './images/ronald-kers-photo.png';
import SaifeddineRajhiPhoto from './images/saifeddine-rajhi-photo.png';
import SerkanCapkanPhoto from './images/serkan-capkan-photo.jpeg';
import SeviKarakulakPhoto from './images/sevi-karakulak-photo.jpg';
import WilliamRizzoPhoto from './images/william-rizzo-photo.png';

const ITEMS = [
  {
    name: 'Alessandro Vozza',
    position: 'Developer relations at Solo.io',
    photo: AlessandroVozzaPhoto,
    url: 'https://www.linkedin.com/in/alessandrovozza/',
  },
  {
    name: 'William Rizzo',
    position: 'Lead architect at SUSE',
    photo: WilliamRizzoPhoto,
    url: 'https://www.linkedin.com/in/william-rizzo/',
  },
  {
    name: 'Pablo Musa',
    position: 'Curriculum Developer at Sysdig',
    photo: PabloMusaPhoto,
    url: 'https://www.linkedin.com/in/pmusa/',
  },
  {
    name: 'Luca Camphuisen',
    position: 'Owner at Logic Shift',
    photo: LucaCamphuisenPhoto,
    url: 'https://www.linkedin.com/in/luca-camphuisen/',
  },
  {
    name: 'Matteo Bianchi',
    position: 'Independent',
    photo: MatteoBianchiPhoto,
    url: 'https://www.linkedin.com/in/mbianchidev/',
  },
  {
    name: 'Rajesh Gunasekaran',
    position: 'DevOps Engineer at Cognizant',
    photo: RajeshGunasekaranPhoto,
    url: 'https://www.linkedin.com/in/rajesh-gunasekaran-4a146224/',
  },
  {
    name: 'Marcel Kerker',
    position: 'Sr. Platform Engineer at HCS Company',
    photo: MarcelKerkerPhoto,
    url: 'https://www.linkedin.com/in/mkerker/',
  },
  {
    name: 'Serkan Capkan',
    position: 'Solutions Architect at Cloutive',
    photo: SerkanCapkanPhoto,
    url: 'https://www.linkedin.com/in/serkancapkan/',
  },
  {
    name: 'Carlos Mestre del Pino',
    position: 'Platform Engineering Consultant at ITQ',
    photo: CarlosMestrePhoto,
    url: 'https://www.linkedin.com/in/mestredelpino/',
  },
  {
    name: 'Meg Stefouli',
    position: 'CNCF Student and KCD Organizer',
    photo: MegStefouliPhoto,
    url: 'https://www.linkedin.com/in/megstefuli/',
  },
  {
    name: 'Fahd Ekadioin',
    position: 'Partner Engineer at Google',
    photo: FahdEkadioinPhoto,
    url: 'https://www.linkedin.com/in/fahdekadioin/',
  },
  {
    name: 'Pavel Chunyayev',
    position: 'Head of Engineering at 2Solar',
    photo: PavelChunyayevPhoto,
    url: 'https://www.linkedin.com/in/pavelchunyayev/',
  },
  {
    name: 'Sevi Karakulak',
    position: 'Engineering Lead at Container Solutions',
    photo: SeviKarakulakPhoto,
    url: 'https://www.linkedin.com/in/sevikarakulak/',
  },
  {
    name: 'Ronald Kers',
    position: 'Content Creator at ACC ICT',
    photo: RonaldKersPhoto,
    url: 'https://www.linkedin.com/in/ronaldkers/',
  },
  {
    name: 'Karla Valeria Feijoo',
    position: 'Sr. Field Marketing Manager at Isovalent',
    photo: KarlaFeijooPhoto,
    url: 'https://www.linkedin.com/in/karla-valeria-feijoo-54934422/',
  },
  {
    name: 'Saifeddine Rajhi',
    position: 'Sr. SRE engineer at Takeaway.com JET',
    photo: SaifeddineRajhiPhoto,
    url: 'https://www.linkedin.com/in/rajhi-saif/',
  },
  {
    name: 'Catalin Jora',
    position: 'Cloud Consultant at FikaWorks',
    photo: CatalinJoraPhoto,
    url: 'https://www.linkedin.com/in/jocatalin/',
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
