'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      album.associate = function(models) {
        album.belongsTo(models.artist, {
            foreignKey: "artist_id",
            onDelete: 'CASCADE'
        });
        album.hasMany(models.song, {
        
          foreignKey: 'album_id'
        });
    };
  };
};
  album.init({
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'album',
  });
  return album;
};