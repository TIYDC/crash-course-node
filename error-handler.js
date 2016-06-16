
module.exports = function(err, req, res, next) {
    res.end('<h1>' + err.message + '</h1>');
};
