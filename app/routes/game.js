module.exports = function (scope) {
	scope.get('/game', function (req, res) {
		scope.app.controllers.game.init(scope, req, res);
	});
}