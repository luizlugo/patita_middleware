var config = {
	database : {
		prod : {
			database : '$DB_DATABASENAME',
			username : '$DB_USER',
			password : '$DB_PWD',
			options : {
				host : '$DB_HOST',
				port : '$DB_PORT',
				dialect : 'mysql',
				pool : {
					max : 10,
					min : 0,
					idle : 30000,
				},
			}
		},
		qa : {
			database : '$DB_DATABASENAME',
			username : '$DB_USER',
			password : '$DB_PWD',
			options : {
				host : '$DB_HOST',
				port : '$DB_PORT',
				dialect : 'mysql',
				pool : {
					max : 10,
					min : 0,
					idle : 30000,
				},
			}
		},
		dev : {
			database : 'patitadb',
			username : 'root',
			password : '',
			options : {
				host : 'localhost',
				port : '3306',
				dialect : 'mysql',
				pool : {
					max : 10,
					min : 0,
					idle : 30000,
				},
			}
		},

	},
	JWTSecret 	 : 'Ff2Et53FnbSTnfOK8zsXgOlSNuzdVOw0qcDQbVx4gidgly0rBVVXjSFhxUWx',
	JWTAlgorithm : 'HS256'
};
module.exports = config;
