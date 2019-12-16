module.exports = (sequelize, Sequelize) => {
  const YearLangEvent = sequelize.define('YearLangEvent', {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    pubdate: Sequelize.DATE
  });

  YearLangEvent.associate = models => {
    YearLangEvent.belongsTo(models.Language);
    YearLangEvent.hasMany(models.Contemplation);
  };
  return YearLangEvent;
};
