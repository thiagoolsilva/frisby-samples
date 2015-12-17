var _errorResponseJSON = function(statusCode, message, res) {
	if(res) {
		var resultMessage = {
			code: statusCode,
			message: message	
		};
		_successRequestJSON(statusCode, resultMessage, res);
	}else {
		throw 'invalid response object';
	}
}

var _successRequestJSON = function(statusCode, resultObject, res) {
	if(res) {
		
		//Send the message back
		res.setHeader('Content-Type', 'application/json');
		res.statusCode = statusCode;
		res.send(resultObject);
	}else {
		throw 'invalid response object';
	}
}


module.exports = {
	errorResponseJSON: _errorResponseJSON,
	successRequestJSON:_successRequestJSON
}