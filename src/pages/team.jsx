/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/team/hero';
import Members from 'components/pages/team/members/members';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const Team = () => (
  <Layout>
    <Hero />
    <Members />
  </Layout>
);

export default Team;

export const Head = ({ location: { pathname } }) => <SEO {...SEO_DATA.team} pathname={pathname} />;
