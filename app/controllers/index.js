module.exports.init = function (scope, req, res) { 
    res.render('index', { validation: {}, loginData: {} });
};

module.exports.authenticate = function (scope, req, res) { 
    var loginData = req.body;

    req.assert('username', 'User field is required').notEmpty();
    req.assert('password', 'Password field is required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('index', { validation: errors, loginData: loginData });
        return;
    }

    // var connectionMongoDB = scope.config.mongodb;
    // var user = new scope.app.models.User(connectionMongoDB);
    // user.insert(loginData);

    res.send('authenticated!');
};