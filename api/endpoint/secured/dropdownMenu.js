const router = require('express').Router();
const models = require('../../models');

// /api-edk-ns/year/getDropdownMenuItems
router.get('/getDropdownMenuItems', async (req, res) => {
  const language = await models.Language.findAll({
    attributes: ['id', 'language', 'shortName']
  });
  const year = await models.Year.findAll({ attributes: ['id', 'title'] });

  res.send({
    language,
    year
  });
});

module.exports = router;
