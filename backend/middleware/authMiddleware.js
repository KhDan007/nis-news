const auth = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    try {
        const bearerToken = token.split(" ")[1];
        const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
        req.writer = decoded.writer;
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token has expired" });
        } else if (err.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token" });
        }
        res.status(500).json({ message: "Server error during authentication" });
    }
};
