
module.exports = function(req, res, next) {
    console.log('checking auth');

    var isAuthorized = req.query.auth;

    // do some kind of real auth check!

    if (isAuthorized) {
        next();
    } else {
        next(new Error('You are not authorized!'));
    }
};
