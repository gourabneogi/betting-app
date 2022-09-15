const createError = require('http-errors');
const app = require("./app");
const cors = require('cors');

app.use('/', cors(), require('./routes/index.route'));
app.use("/role", cors(), require('./routes/role.route'))
app.use("/user", cors(), require('./routes/user.route'))

app.use((req, res, next) => {
    next(createError(404));
});

app.use("*", (err, req, res, next) => {
    res.status(err.status || 500).send({
        error: process.env.developement ? err : {},
        message: err.message
    });
});

module.exports = app;