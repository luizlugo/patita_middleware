'use strict';
global.baseRouteSuffix = "/";
global._ = require('underscore');
global.Promise = require('bluebird');
global.moment = require('moment');
global.__base = __dirname + '/';
global.lenguage = process.env.NODE_LENGUAGE || 'en';
global.i18 = require(__base + 'i18/')[lenguage];
global.endpointURL = (process.env.NODE_ENV == "qa" || process.env.NODE_ENV == "dev" || !process.env.NODE_ENV) ? "http://localhost" : "http://localhost";

const Hapi = require('hapi');
const server = new Hapi.Server({});
var corsHeaders = require('hapi-cors-headers')
var fs = require("fs");
var config = {
	port : (process.env.NODE_ENV == "qa" || process.env.NODE_ENV == "prod")  ? 3000 : 3001,
};


// SSL Configuration
/*
if (process.env.NODE_ENV == "prod") {
	config['tls'] = {
		key : fs.readFileSync("/etc/ssl/rys/shockoe-com.key"),
		cert : fs.readFileSync("/etc/ssl/rys/shockoe-com.crt")
	};
}
*/

/**
* API Routes Configuration
**/
server.connection(config);
// Register authentication method for jwt
server.register(
	require('hapi-auth-jwt2'),
	function (err) {
		// Setup JWT authentication
		server.auth.strategy('jwt', 'jwt',
		{
			key: require(__base + 'config/config').JWTSecret,
			validateFunc: require(__base + 'Library/authentication').validate,
			verifyOptions: {
				algorithms: [require(__base + 'config/config').JWTAlgorithm]
			}
		});

		//Use JWT for authentication
		server.auth.default('jwt');
		server.route(require(__base + 'Routes/'));
		server.start(function () {
			console.log('Server running on: ' + server.info.uri);
		});

	}
);

server.ext('onPreResponse', corsHeaders);
