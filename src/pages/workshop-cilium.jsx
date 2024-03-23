/* eslint-disable react/prop-types */

import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hero from 'components/shared/workshop-hero/hero';
import Information from 'components/shared/workshop-information';
import SEO_DATA from 'constants/seo-data';

const TITLE = 'Cilium Basics';

const DESCRIPTION = [
  'This one-day training in English or German provides a practical and clear introduction to Cilium, an eBFP-based networking, observability and security stack for cloud and on-premise infrastructure.',
];

const WorkshopGo = () => (
  <Layout>
    <Hero title={TITLE} description={DESCRIPTION} />
    <Information itemName="cilium" />
  </Layout>
);

export default WorkshopGo;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.workshopCilium} pathname={pathname} />
);
