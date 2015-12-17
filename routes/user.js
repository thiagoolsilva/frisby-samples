var express = require('express');
var router = express.Router();
var helperRequest = require('./../util/helper_request');
var helper = require('./../util/helper');
var userModel = require('./../model/data_user');

router.get('/', function(req, res) {
	userModel.singleUser(function(result) {
		helperRequest.successRequestJSON(200, result, res);
	});
});

router.get('/:id/complex/:complex', function(req, res) {
	userModel.singleComplexUser(function(result) {
		helperRequest.successRequestJSON(200, result, res);
	});
});


router.get('/:id',function(req, res) {
	userModel.findUserById(req.params.id, function(result, error) {
		if(error || helper.checkEmptyOrNullObject(result)) {
			helperRequest.errorResponseJSON(404, 'resource not found', res);
		}else {
			helperRequest.successRequestJSON(200, result, res);
		}
	});	
});


module.exports = router;