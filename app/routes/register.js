module.exports = function (scope) {
	scope.get('/register', function (req, res) {
		scope.app.controllers.register.init(scope, req, res);
	});
	
	scope.post('/register', function (req, res) {
		scope.app.controllers.register.create(scope, req, res);
	});
};