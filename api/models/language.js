module.exports = (sequelize, Sequelize) => {
  const Language = sequelize.define('Language', {
    language: Sequelize.STRING,
    shortName: Sequelize.STRING
  });

  Language.associate = models => {
    Language.hasMany(models.YearLangEvent);
  };
  return Language;
};
