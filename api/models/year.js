module.exports = (sequelize, Sequelize) => {
  const Year = sequelize.define('Year', {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    pubdate: Sequelize.DATE
  });

  Year.associate = models => {
    Year.hasMany(models.YearLangEvent);
  };
  return Year;
};
