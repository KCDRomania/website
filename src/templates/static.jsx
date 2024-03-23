/* eslint-disable react/prop-types */
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import React from 'react';

import AnchorHeading from 'components/shared/anchor-heading';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const components = {
  h2: AnchorHeading('h2'),
  h3: AnchorHeading('h3'),
};

const StaticTemplate = ({
  data: {
    mdx: {
      frontmatter: { title },
    },
  },
  children,
}) => (
  <Layout headerClassnames="!bg-white">
    <section className="container-sm">
      <article className="safe-paddings pt-24 pb-44">
        <h1 className="text-6xl font-bold text-primary-1">{title}</h1>
        <div className="static-content mt-16">
          <MDXProvider components={components}>{children}</MDXProvider>
        </div>
      </article>
    </section>
  </Layout>
);

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default StaticTemplate;

export const Head = ({
  location: { pathname },
  data: {
    mdx: {
      frontmatter: { title },
    },
  },
}) => <SEO pathname={pathname} {...SEO_DATA.static({ title })} />;
