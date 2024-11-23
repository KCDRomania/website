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
  proposal: {
    to: `/#${getAnchor('Call for Proposal')}`,
    id: getAnchor('Call for Proposal'),
    homeTo: null,
  },
  team: {
    to: '/team',
    homeTo: '/team',
  },
  archive2024: {
    to: 'https://2024.cloudnativedays.ro',
    target: '_blank',
  },
  tickets: {
    to: null,
    target: '_blank',
  },
  cfp: {
    to: 'https://sessionize.com/cloud-native-days-2025',
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
    to: 'https://www.linkedin.com/company/cloudnativedaysromania/',
    target: '_blank',
  },
  // Social-links
  photos: {
    to: 'https://drive.google.com/drive',
    target: '_blank',
  },
  survey: {
    to: 'https://docs.google.com/forms',
    target: '_blank',
  },
  twitter: {
    to: 'https://x.com/cloudnativero',
    target: '_blank',
  },
  instagram: {
    to: 'https://www.instagram.com/cloudnativedaysromania/',
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
    to: 'https://www.youtube.com/watch?v=IKBuAP1Ybw8&list=PLj6h78yzYM2OK5BDO7YeVGQjfIJydLfyU&ab_channel=CloudNativeDaysRomania',
    target: '_blank',
  },
  sponsorProspectus: {
    to: 'https://bit.ly/4f3XmmM',
    target: '_blank',
  },
};
