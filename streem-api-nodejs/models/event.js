module.exports = (sequelize, DataTypes) =>
  sequelize.define('Event', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlName: {
      type: DataTypes.STRING,
      unique: true,
    },
    permissions: {
      type: DataTypes.ENUM,
      validate: {
        isIn: [['private', 'public']],
      },
      values: ['private', 'public'],
    },
    location: DataTypes.STRING,
    owner: DataTypes.STRING,
    additionalAdmins: DataTypes.STRING,
    streamingOn: DataTypes.BOOLEAN,
    commentsOn: DataTypes.BOOLEAN,
  }, {
    setterMethods: {
      name: function setName(name) {
        this.setDataValue(
          'urlName',
          encodeURIComponent(name.toLowerCase().replace(/\s/gi, '-'))
        );
        this.setDataValue('name', name);
      },
    },
  });
