var _function_check_emptyOrNull = function(obj) {
	return typeof obj === 'undefined' || obj === null;
}

module.exports = {
	checkEmptyOrNullObject: _function_check_emptyOrNull
}