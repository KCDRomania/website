import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    // { text: 'Sponsors', ...LINKS.sponsors },
    // { text: 'Workshops', ...LINKS.workshops },
    { text: 'Podcast', ...LINKS.podcast },
    // { text: 'Archive', ...LINKS.archive },
    { text: 'Team', ...LINKS.team },
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Mission Statement', ...LINKS.mission },
    { text: 'Team', ...LINKS.team },
    // { text: 'Data Privacy', ...LINKS.privacy },
  ],
  mobile: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    // { text: 'Call for Proposal', ...LINKS.proposal },
    // { text: 'Workshops', ...LINKS.workshops },
    // { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Podcast', ...LINKS.podcast },
    { text: 'Team', ...LINKS.team },
    // { text: 'Archive', ...LINKS.archive },
  ],
};

export default MENUS;
