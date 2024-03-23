/* eslint-disable react/prop-types */
import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hero from 'components/shared/workshop-hero';
import Information from 'components/shared/workshop-information';
import SEO_DATA from 'constants/seo-data';

const TITLE = 'GitOps with ArgoCD';

const DESCRIPTION = [
  'GitOps is a natural extension of the Infrastructure-as-Code and Continuous Delivery principles with a focus on using Git as the single source of truth for your system. Changes to infrastructure and applications are made declaratively via a Git repository, with an automated process ensuring that the current state of your system reflects the state of the repository.',
  'This one-day training in German or English offers a practical and clearly understandable introduction to GitOps using Argo CD on Kubernetes.',
];

const WorkshopArgo = () => (
  <Layout>
    <Hero title={TITLE} description={DESCRIPTION} />
    <Information itemName="argo" />
  </Layout>
);

export default WorkshopArgo;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.workshopArgo} pathname={pathname} />
);
