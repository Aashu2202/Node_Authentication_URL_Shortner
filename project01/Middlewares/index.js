function logReqRes() {
    return (req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    };
}

module.exports = {
    logReqRes
};
