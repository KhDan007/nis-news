const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    // Get token from header
    const token = req.header("Authorization");

    // Check if no token is present
    if (!token) {
        console.log("No token provided");
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    // Split the token to remove the 'Bearer' prefix
    try {
        const bearerToken = token.split(" ")[1]; // Split the 'Bearer' part from the actual token

        // Verify the token
        const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);

        // Attach the writer data to the request
        req.writer = decoded.writer;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = auth;
