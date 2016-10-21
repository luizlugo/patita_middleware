/**
 * Library for sending email
 *
 * NOTE:  SMTP connection is renewed with every email attempt!
 *        This is not suitable for mass mail!
 *        Mass mail should be sent using another option:
 *        https://github.com/andris9/Nodemailer#delivering-bulk-mail
 */

//Requires
var nodemailer = require('nodemailer');
var smtpPool = require('nodemailer-smtp-pool');

//Create transporter using global config file
var transporter = nodemailer.createTransport(smtpPool({
	service: 'gmail',
	auth: {
		user: 'android@shockoe.com',
		pass: 'shockoedev'
	}
}));

var from = {
	address : 'android@shockoe.com',
	name    : 'RYS'
};

exports.sendTemplatedMessage = function(receiver, subject, message, callback){
	var content;
	var text;
	if (_.isArray(message)) {
		content = '';
		text    = '';
		_.each(message, function(m){
			text    += m+'/n';
			content += '<p>'+m+'</p>';
		});
	} else if(_.isString(message)) {
		text    = message;
		content = '<p>'+message+'</p>';
	} else {
		content = '';
	}

	var html = content;

	transporter.sendMail({
		from    : from,
		to      : receiver,
		subject : subject,
		html    : html,
		text    : text,
		replyTo : 'support@shockoe.com'
	}, (callback ? callback : null));
};

exports.sendEmail = function(_params, _callback){
    exports.sendTemplatedMessage(_params.to, _params.subject, _params.html, _callback);
};
