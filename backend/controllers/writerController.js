const Writer = require("../models/Writer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new writer
const signup = async (req, res) => {
    console.log("req.body", req.body);
    const { name, email, password, bio } = req.body;

    try {
        // Check if the writer already exists
        let writer = await Writer.findOne({ email });
        if (writer) {
            return res
                .status(400)
                .json({ message: "This email is already registered" });
        }

        // Create a new writer instance
        writer = new Writer({
            name,
            email,
            password,
            bio,
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        writer.password = await bcrypt.hash(password, salt);

        // Save the writer to the database
        await writer.save();

        // Create and return a JWT token
        const payload = {
            writer: {
                id: writer._id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "1h" },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.stack);
        res.status(500).send("Server error");
    }
};

// Login an existing writer
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the writer exists
        let writer = await Writer.findOne({ email });
        if (!writer) {
            return res
                .status(400)
                .json({ message: "Invalid email or password" });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, writer.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ message: "Invalid email or password" });
        }

        // Create and return a JWT token
        const payload = {
            writer: {
                id: writer._id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "1h" },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};

// Get writer's profile
const getWriterProfile = async (req, res) => {
    try {
        // Fetch the writer by ID (from the token)
        const writer = await Writer.findById(req.writer.id).select("-password"); // Exclude password from the response
        if (!writer) {
            return res.status(404).json({ message: "Writer not found" });
        }
        res.json(writer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};

module.exports = {
    signup,
    login,
    getWriterProfile,
};
