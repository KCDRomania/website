/* eslint-disable react/prop-types */
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const defaultTitle = 'Cloud Native Days Romania';
const defaultDescription = 'Experience the power of community at the Cloud Native Days in Romania!';

const SEO = ({ title, description, pathname }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, siteUrl, siteImage },
    },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
          siteImage
        }
      }
    }
  `);

  const currentTitle = title || defaultTitle || siteTitle;
  const currentDescription = description || defaultDescription || siteDescription;
  const currentUrl = pathname !== '/' ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <>
      <title key={currentTitle}>{currentTitle}</title>
      {/* General */}
      <meta name="description" content={currentDescription} />
      {/* Open Graph */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={siteUrl + siteImage} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default SEO;
