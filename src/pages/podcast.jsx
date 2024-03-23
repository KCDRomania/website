/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/podcast/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const Podcast = () => (
  <Layout headerClassnames="!bg-white">
    <Hero />
  </Layout>
);

export default Podcast;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.podcast} pathname={pathname} />
);
