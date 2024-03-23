/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/schedule/hero';
import Schedule from 'components/pages/schedule/schedule/schedule';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Sponsors from 'components/shared/sponsors';
import SEO_DATA from 'constants/seo-data';

const SchedulePage = ({ location }) => (
  <Layout headerClassnames="!bg-white">
    <Hero />
    <Schedule location={location} />
    <Sponsors />
  </Layout>
);

export default SchedulePage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.schedule} pathname={pathname} />
);
