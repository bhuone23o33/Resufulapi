

const errorMiddleware = (err, req, res, next) => {
    const statusCode = res.statusCode;
    res.status((statusCode) ? statusCode : 500);
    res.json({ message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack : null });
}

module.exports = errorMiddleware; 