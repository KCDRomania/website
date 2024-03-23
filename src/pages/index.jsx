/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/home/hero';
import Partners from 'components/pages/home/partners';
import Supported from 'components/pages/home/supported';
import Venue from 'components/pages/home/venue';
// import Workshops from 'components/pages/home/workshops';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Sponsors from 'components/shared/sponsors';

const HomePage = () => (
  <Layout homepage>
    <Hero />
    <Venue />
    {/* <Workshops /> */}
    <Supported />
    <Sponsors />
    <Partners />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
