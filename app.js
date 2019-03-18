var app = require('./config/server');

var port = process.env.PORT || 80;

app.listen(port, function () {
  console.log(`Server running on localhost:${port}`);
});
