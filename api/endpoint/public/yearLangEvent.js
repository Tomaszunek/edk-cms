const router = require('express').Router();
const models = require('../../models');

// /api-edk-ns/yearLangEvent/getAll
router.get('/getAll', (req, res) => {
  models.YearLangEvent.findAll({
    include: [{ model: models.Language }, { model: models.Contemplation }]
  })
    .then(years => res.send(years))
    .catch(err => console.log(err));
});

// /api-edk-ns/yearLangEvent/getById/:idYearLangEvent
router.get('/getById/:id', (req, res) => {
  models.YearLangEvent.findOne({
    where: { id: req.params.id },
    include: [{ model: models.Language }, { model: models.Contemplation }]
  })
    .then(years => res.send(years))
    .catch(err => console.log(err));
});

module.exports = router;
