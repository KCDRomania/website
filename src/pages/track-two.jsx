/* eslint-disable react/prop-types */
import React from 'react';

// import Hero from 'components/pages/schedule/hero';
import Schedule from 'components/pages/schedule/schedule/track-two';
import Layout from 'components/shared/layout/track-layout';
import SEO from 'components/shared/seo';
import Sponsors from 'components/shared/sponsors';
import SEO_DATA from 'constants/seo-data';

const SchedulePage = ({ location }) => (
  <Layout headerClassnames="!bg-white">
    {/* <Hero /> */}
    <div className="container mt-4 text-center text-primary-1 sm:px-7">
      <h1 className="text-6xl font-bold leading-denser tracking-[-0.01em] md:text-4xl">Track 2</h1>
    </div>
    <Schedule location={location} className="mb-0 pb-0" />
    <Sponsors className="mt-0 pt-0" />
  </Layout>
);

export default SchedulePage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.schedule} pathname={pathname} />
);
