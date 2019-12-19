const expressRoute = require('express').Router;
const yearRoutes = require('./public/year');
const yearLangEventRoutes = require('./public/yearLangEvent');

const dropdownMenuItems = require('./secured/dropdownMenu');

const endpointNSroute = expressRoute();
const endpointTSroute = expressRoute();

endpointNSroute.use('/year', yearRoutes);
endpointNSroute.use('/yearLangEvent', yearLangEventRoutes);

endpointTSroute.use('/menu', dropdownMenuItems);

module.exports = { endpointNSroute, endpointTSroute };
