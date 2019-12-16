const router = require('express').Router();
const models = require('../../models');

// /api-edk-ns/year/getAll
router.get('/getAll', (req, res) => {
  models.Year.findAll({
    include: [
      {
        model: models.YearLangEvent,
        include: [{ model: models.Language }, { model: models.Contemplation }]
      }
    ]
  })
    .then(years => res.send(years))
    .catch(err => console.log(err));
});

// /api-edk-ns/year/getById/:idYear
router.get('/getById/:id', (req, res) => {
  models.Year.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: models.YearLangEvent,
        include: [{ model: models.Language }, { model: models.Contemplation }]
      }
    ]
  })
    .then(years => res.send(years))
    .catch(err => console.log(err));
});

module.exports = router;
