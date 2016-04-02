module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    readableName: DataTypes.STRING,
    name: DataTypes.STRING,
    permissions: DataTypes.STRING, // private / public / etc
    location: DataTypes.STRING,
    owner: DataTypes.STRING,
    additionalAdmins: DataTypes.STRING,
    streamingOn: DataTypes.BOOLEAN,
    commentsOn: DataTypes.BOOLEAN,
  });

  return Event;
};
