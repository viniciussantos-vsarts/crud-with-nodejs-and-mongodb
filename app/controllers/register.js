module.exports.init = function (scope, req, res) {
    res.render('register', { validation: {}, userData: {} });
};

module.exports.create = function (scope, req, res) {
    var userData = req.body;

    req.assert('name', 'Field name is required').notEmpty();
    req.assert('username', 'User field is required').notEmpty();
    req.assert('password', 'Password field is required').notEmpty();
    req.assert('house', 'Field house is required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('register', { validation: errors, userData: userData });
        return;
    }

    var connectionMongoDB = scope.config.mongodb;
    var user = new scope.app.models.User(connectionMongoDB);
    user.insert(userData);

    res.send('registered!');
};