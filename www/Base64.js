
var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec'),
    channel = require('cordova/channel'),
    cordova = require('cordova');

function Base64 () { console.log('Base64 loaded');}

Base64.prototype.encodeFile = function(filePath, successCallback, errorCallback) {
	var args = {};
	args.filePath = filePath;

	//if error is null then replace with empty function to silence warnings
	if(!errorCallback){
		errorCallback = function(){};
	}

	exec(successCallback, errorCallback, "Base64", "encodeFile", [filePath]);
}

var Base64 = new Base64();

module.exports = Base64;
