/* eslint-disable react/prop-types */
import React from 'react';

import Speakers from 'components/pages/speakers/speakers';
// import Workshops from 'components/pages/home/workshops';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const SpeakerPage = ({ location }) => (
  <Layout headerClassnames="!bg-white">
    <Speakers location={location} />
  </Layout>
);

export default SpeakerPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
