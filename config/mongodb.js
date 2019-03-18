var mongo = require('mongodb');

var connDB = function () {
    var db = new mongo.Db(
        'mmorpg-got',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    );

    return db;
};

module.exports = function () {
    return connDB;
};