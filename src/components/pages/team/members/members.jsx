import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import AlinaBratuPhoto from './images/alina-bratu-photo.jpg';
import AndreiPietricicaPhoto from './images/andrei-pietricica-photo.png';
import ArthurBerezinPhoto from './images/arthur-berezin-photo.jpeg';
import BogdanLucaciuPhoto from './images/bogdan-lucaciu-photo.png';
import BogdanPopaPhoto from './images/bogdan-popa-photo.jpg';
import BuddhikaKandamullaPhoto from './images/buddhika-kandamulla-photo.jpeg';
import CatalinCostrasPhoto from './images/catalin-costras-photo.png';
import CatalinJoraPhoto from './images/catalin-jora-photo.png';
import ClaudiaLicuPhoto from './images/claudia-licu-photo.jpeg';
import DanielDrackPhoto from './images/daniel-drack-photo.jpeg';
import ElifSamedinPhoto from './images/elif-samedin-photo.png';
import IonMeitoiuPhoto from './images/ion-meitoiu-photo.png';
import IonutBradatanPhoto from './images/ionut-bradatan-photo.png';
import JacopoNardielloPhoto from './images/jacopo-nardiello-photo.jpeg';
import LiviuCosteaPhoto from './images/liviu-costea-photo.jpeg';
import MariaSecareanuPhoto from './images/maria-secareanu-photo.png';
import MichelMurabitoPhoto from './images/michel-murabito-photo.jpeg';
import MihaiPrunareanuPhoto from './images/mihai-prunareanu-photo.jpg';
import OrlinVasilevPhoto from './images/orlin-vasilev-photo.jpeg';
import RominaDrutaPhoto from './images/romina-druta-photo.png';
import VictorVarzaPhoto from './images/victor-varza-photo.png';
import VladFratilaPhoto from './images/vlad-fratila-photo.png';
import WilliamRizzoPhoto from './images/william-rizzo-photo.jpeg';
import WouterLigtenbergPhoto from './images/wouter-ligtenberg-photo.png';

const ORGANIZERS = [
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
    name: 'Ionut Bradatan',
    position: 'Senior UX Designer at Visma',
    photo: IonutBradatanPhoto,
    url: 'https://www.linkedin.com/in/bradatanionut/',
  },
];

const VOLUNTEERS = [
  {
    name: 'Alina Bratu',
    position: 'Export Sales Advisor at Michelin',
    photo: AlinaBratuPhoto,
    url: 'https://www.linkedin.com/in/alina-bratu-32a0bb103',
  },
  {
    name: 'Bogdan Popa',
    position: 'Software Engineer at Adobe',
    photo: BogdanPopaPhoto,
    url: 'https://linkedin.com/in/bogdan-popa-8a940313',
  },
  {
    name: 'Claudia Licu',
    position: 'Dev Chapter Lead at ING Hubs Romania',
    photo: ClaudiaLicuPhoto,
    url: 'https://www.linkedin.com/in/claudia-licu-13148610a',
  },
  {
    name: 'Catalin Costras',
    position: 'Senior DevOps Engineer at London Stock Exchange Group',
    photo: CatalinCostrasPhoto,
    url: 'https://www.linkedin.com/in/catalin-costras/',
  },
  {
    name: 'Maria Secareau',
    position: 'Senior Program Manager at Adobe',
    photo: MariaSecareanuPhoto,
    url: 'https://www.linkedin.com/in/maria-secareanu-7728b512/',
  },
  {
    name: 'Mihai Prunareanu',
    position: 'IT Service Management Engineer at ING Hubs Romania',
    photo: MihaiPrunareanuPhoto,
    url: 'https://www.linkedin.com/in/mihai-prunareanu/',
  },
  {
    name: 'Buddhika Kandamulla',
    position: 'DevOps Engineer',
    photo: BuddhikaKandamullaPhoto,
    url: 'https://www.linkedin.com/in/buddhipriyashan/',
  },
  {
    name: 'Liviu Costea',
    position: 'Staff Reliability Engineer at Juni',
    photo: LiviuCosteaPhoto,
    url: 'https://www.linkedin.com/in/liviucostea/',
  },
  {
    name: 'Daniel Drack',
    position: 'Senior DevOps Engineer at FullStackS',
    photo: DanielDrackPhoto,
    url: 'https://www.linkedin.com/in/drackthor/',
  },
  {
    name: 'Jacopo Nardiello',
    position: 'Founder & CEO at SIGHUP',
    photo: JacopoNardielloPhoto,
    url: 'https://www.linkedin.com/in/jnardiello/',
  },
  {
    name: 'Michel Murabito',
    position: 'Developer Advocate at Mia-Platform',
    photo: MichelMurabitoPhoto,
    url: 'https://www.linkedin.com/in/mich-murabito/',
  },
  {
    name: 'Orlin Vasilev',
    position: 'Senior Technology Evangelist at SUSE',
    photo: OrlinVasilevPhoto,
    url: 'https://www.linkedin.com/in/orlinvasilev/',
  },
  {
    name: 'Arthur Berezin',
    position: 'CEO, Co-Founder at StageCentral',
    photo: ArthurBerezinPhoto,
    url: 'https://www.linkedin.com/in/arthurberezin/',
  },
  {
    name: 'William Rizzo',
    position: 'Lead Architect Consultant at SUSE',
    photo: WilliamRizzoPhoto,
    url: 'https://www.linkedin.com/in/william-rizzo/',
  },
];

const LOGOS = [
  // { icon: ArchCloud, url: 'https://arch.cloud/', iconClassName: 'w-[260px] h-auto' },
];

const Members = () => (
  <section className="safe-paddings relative bg-white pb-40 lg:pb-32 md:py-24 sm:py-16">
    <div className="container text-center">
      <RenderMember title="Organizers" items={ORGANIZERS} />
      <RenderMember title="Volunteers" items={VOLUNTEERS} />
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

const RenderMember = (props) => {
  const { title, items } = props;
  return (
    <>
      <h3 className="text-5xl font-bold leading-denser text-primary-1">{title}</h3>
      <ul className="mt-20 grid grid-cols-4 gap-8 lg:gap-6 md:flex md:flex-wrap md:justify-evenly [@media(max-width:900px)]:mx-auto [@media(max-width:900px)]:max-w-[570px]">
        {items.map(({ name, position, photo, url }, index) => (
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
      <br />
      <br />
    </>
  );
};

RenderMember.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default Members;
