const expressRoute = require('express').Router;
const yearRoutes = require('./public/year');
const yearLangEventRoutes = require('./public/yearLangEvent');

const endpointNSroute = expressRoute();
const endpointTSroute = expressRoute();

endpointNSroute.use('/year', yearRoutes);
endpointNSroute.use('/yearLangEvent', yearLangEventRoutes);

module.exports = { endpointNSroute, endpointTSroute };
