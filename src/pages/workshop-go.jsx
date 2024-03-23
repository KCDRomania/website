/* eslint-disable react/prop-types */

import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hero from 'components/shared/workshop-hero/hero';
import Information from 'components/shared/workshop-information';
import SEO_DATA from 'constants/seo-data';

const TITLE = 'Go Basics Workshop';

const DESCRIPTION = [
  'Go is an open source programming language developed by Google. The focus was on pragmatism, so that the simplest and cleanest possible program code can be created, which is executed efficiently. Go is often used for applications and infrastructure components based on scalable network services, cloud computing and containers.',

  'This one-day training in German or English offers an introduction to Go for software developers, architects and DevOps engineers.',
];

const WorkshopGo = () => (
  <Layout>
    <Hero title={TITLE} description={DESCRIPTION} />
    <Information itemName="go" />
  </Layout>
);

export default WorkshopGo;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.workshopGo} pathname={pathname} />
);
