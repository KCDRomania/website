const path = require('path');

const get = require('lodash.get');

const { STATIC_PAGE_REQUIRED_FIELDS } = require('./constants');
// const createRedirects = require('./create-redirects');

const staticTemplate = path.resolve('./src/templates/static.jsx');

module.exports = async ({ graphql, actions }) => {
  const result = await graphql(
    `
      query {
        allMdx(filter: { internal: { contentFilePath: { regex: "/content/static-pages/" } } }) {
          nodes {
            id
            internal {
              contentFilePath
            }
            frontmatter {
              slug
              title
            }
            body
          }
        }
      }
    `
  );

  if (result.errors) throw new Error(result.errors);

  result.data.allMdx.nodes.forEach(({ id, internal: { contentFilePath }, frontmatter }) => {
    // Required fields validation
    STATIC_PAGE_REQUIRED_FIELDS.forEach((fieldName) => {
      if (!get(frontmatter, fieldName)) {
        throw new Error(`Static page "${contentFilePath}" does not have field "${fieldName}"!`);
      }
    });

    const pagePath = `/${frontmatter.slug}/`;

    // createRedirects({ redirectFrom, actions, pagePath });

    actions.createPage({
      path: pagePath,
      component: `${staticTemplate}?__contentFilePath=${contentFilePath}`,
      context: { id },
    });
  });
};
