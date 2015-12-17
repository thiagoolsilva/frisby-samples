var _users_array = [
	{name: "name1", age: 1, gender: 'male'},
	{name: "name2", age: 2, gender: 'male'},
	{name: "name3", age: 3, gender: 'male'},
	{name: "name4", age: 4, gender: 'male'},
	{name: "name5", age: 5, gender: 'male'},
	{name: "name6", age: 6, gender: 'male'}
];

var _users_complex = [
  		{
			name: "name1",
			age: 1, 
			gender: 'male',
		 	user_rule: {
				admin: true		 
		}}
];

var _function_user = function(callback) {
	var user = {
		name: 'thiagos l silva',
		age: 29,
		gender: "male"
	};
	
	callback(user);
};

var _function_one_complex_objc = function(callback) {
	var complex_obj = _users_complex[0];
	
	callback(complex_obj);
}

var _function_user_by_index = function(index, callback) {
	try {
		var user = _users_array[index];
		callback(user, null);
	} catch (error) {
		callback(null, error);
	}
}

module.exports = {
	singleUser: _function_user,
	findUserById: _function_user_by_index,
	singleComplexUser: _function_one_complex_objc
}