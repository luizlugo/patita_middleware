module.exports = function(sequelize, DataTypes) {
	var UserRole = sequelize.define('UserRole', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		name : {
			type : DataTypes.STRING,
		},
		active : {
			type : DataTypes.BOOLEAN,
		}
	});

	return UserRole;
};