module.exports = (sequelize, Sequelize) => {
  const Contemplation = sequelize.define('Contemplation', {
    audioURL: Sequelize.STRING,
    text: Sequelize.STRING(1024),
    placeId: Sequelize.STRING,
    author: Sequelize.STRING,
    bio: Sequelize.STRING
  });

  Contemplation.associate = models => {
    Contemplation.belongsTo(models.YearLangEvent);
  };
  return Contemplation;
};
