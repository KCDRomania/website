/* eslint-disable react/prop-types */

import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hero from 'components/shared/workshop-hero/hero';
import Information from 'components/shared/workshop-information';
import SEO_DATA from 'constants/seo-data';

const TITLE = 'Kubernetes Basics';

const DESCRIPTION = [
  'Container technologies, Kubernetes above all, have become more important in recent years and now are a significant driver of digitalization.',
  'This one-day training in German or English provides a practical and easy-to-understand introduction to Kubernetes.',
];

const WorkshopGo = () => (
  <Layout>
    <Hero title={TITLE} description={DESCRIPTION} />
    <Information itemName="kubernetes" />
  </Layout>
);

export default WorkshopGo;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.workshopKubernetes} pathname={pathname} />
);
