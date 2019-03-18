var User = (function () {

    function User(connection) {
        this._connection = connection();
    }

    User.prototype.insert = function insert(data) {
        this._connection.open(function (err, client) {
            client.collection('users', function (err, collection) {
                collection.insert(data);
                client.close();
            });
        });
    };

    return User;

})();

module.exports = function () {
    return User;
}