module.exports = function (scope) {
	scope.get('/', function (req, res) {
		scope.app.controllers.index.init(scope, req, res);
	});
	
	scope.post('/authenticate', function (req, res) {
		scope.app.controllers.index.authenticate(scope, req, res);
	});
}