/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/home/hero';
import Partners from 'components/pages/home/partners';
// import Speakers from 'components/pages/home/speakers';
// import Supported from 'components/pages/home/supported';
import Venue from 'components/pages/home/venue';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
// import Sponsors from 'components/shared/sponsors';

const HomePage = () => (
  <Layout homepage>
    <Hero />
    <Venue />
    {/* <Speakers /> */}
    {/* <Sponsors /> */}
    <Partners />
    {/* <Supported /> */}
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
