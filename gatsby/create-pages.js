const createStaticPages = require('./create-static-pages');

module.exports = async (options) => {
  await createStaticPages(options);
};
