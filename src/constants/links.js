import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages and sections
  home: {
    to: '/',
  },
  schedule: {
    to: '/schedule',
    id: getAnchor('Schedule'),
    homeTo: '/schedule',
  },
  sponsors: {
    to: `/#${getAnchor('Sponsors')}`,
    id: getAnchor('Sponsors'),
    homeTo: null,
  },
  speakers: {
    to: `/speakers#${getAnchor('Speakers')}`,
    id: getAnchor('Speakers'),
    homeTo: '/speakers',
  },
  workshops: {
    to: '/workshops',
    id: getAnchor('Workshops'),
    homeTo: '/workshops',
  },
  archive: {
    to: '/archive',
    homeTo: '/archive',
  },
  proposal: {
    to: `/#${getAnchor('Call for Proposal')}`,
    id: getAnchor('Call for Proposal'),
    homeTo: null,
  },
  team: {
    to: '/team',
    homeTo: '/team',
  },
  tickets: {
    to: 'https://www.iabilet.ro/bilete-kcd-romania-94389/',
    target: '_blank',
  },
  cfp: {
    to: 'https://forms.gle/JyrTeEJuk2PVAT7d9',
    target: '_blank',
  },
  mission: {
    to: '/mission-statement',
    target: '_blank',
  },
  privacy: {
    to: '/data-privacy',
    target: '_blank',
  },
  conduct: {
    to: 'https://events.linuxfoundation.org/about/code-of-conduct/',
    target: '_blank',
  },
  podcast: {
    to: '/podcast',
    homeTo: '/podcast',
  },

  // Social-links
  linkedin: {
    to: 'https://www.linkedin.com/company/cloudnativenl/',
    target: '_blank',
  },
  // Social-links
  photos: {
    to: 'https://drive.google.com/drive/u/0/folders/1xE6quWLHGXHmXLb8L5ZZn7oMtcb0vyfV',
    target: '_blank',
  },
  survey: {
    to: 'https://docs.google.com/forms/d/e/1FAIpQLSepVSp3ijXIy_hHdsrpJEQQbCpaqIuD3sdrEO-3wW8_OdPWYQ/viewform',
    target: '_blank',
  },
  twitter: {
    to: 'https://twitter.com/cloudnativeams',
    target: '_blank',
  },
  googlemaps: {
    to: 'https://www.google.com/maps/search/Radisson+Blu+Hotel,+Bucharest',
    target: '_blank',
  },
  parkingInfo: {
    to: 'https://cmpb.ro/',
    target: '_blank',
  },
  youtube: {
    to: 'https://www.youtube.com/@cncf',
    target: '_blank',
  },
};
