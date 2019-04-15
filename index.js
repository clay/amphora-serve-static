const express = require('express');
const path = require('path');

// Plugin that adds routes for static folder in each site
module.exports = (router, db, publish, sites, site) => {
  router.use(express.static(path.join(site.dir, 'static'), { index: false }));
};
