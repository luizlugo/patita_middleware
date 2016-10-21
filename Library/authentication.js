/**
* Authentication Management
*/

/**
* Load local dependencies
*/
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var models = require(__base + 'Models/');

Promise.promisifyAll(jwt);
Promise.promisifyAll(bcrypt);

/**
* Ensure that the decoded token is actually valid.
*
* @param  {Object}   decoded  The decoded payload
* @param  {Object}   request  The current request
* @param  {Function} callback Function to execute after validation
* @return {void}
*/
exports.validate = function (decoded, request, callback) {
	console.log('validate');

	// Validate the token
	models.Token.findOne({
		token : request.auth.token
	}).then(function(token){
		console.log('token:', token);

		if (token) {
			callback(null, true);
		} else {
			callback(null, false);
		}
	}, function(err) {
		callback(err);
	});
};

/**
* Generate new JWT Token
*
* @param {Object} payload Payload to encode
* @return {Promise}
*/
exports.createToken = function (payload) {
	// Sign the payload
	return jwt.signAsync(payload, require(__base + 'config/config').JWTSecret, {algorithm: require(__base + 'config/config').JWTAlgorithm});
};

/**
 * Generate a password hash
 * @param  {string} password Password to hash
 * @return {Promise}
 */
exports.generatePasswordHash = function(password){
	return new Promise(function(resolve, reject){
		bcrypt.genSalt(10, function(err, salt) {
		    bcrypt.hash(password, salt, function(err, hash) {
		        if (err) {
		        	reject(err);
		        }

		        resolve(hash);
		    });
		});
	});
};

/**
 * Compare a plaintext password with a hash
 * @param  {String} password Plaintext password to compare to hash
 * @param  {String} hash     Hash to compare plaintext password to
 * @return {Promise}
 */
exports.comparePasswordWithHash = function(password, hash){
	return new Promise(function(resolve, reject){
		bcrypt.compare(password, hash, function(err, res) {
		    if (err) {
		    	reject(err);
		    }

		    resolve(res);
		});

	});
};
