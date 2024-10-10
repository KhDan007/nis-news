const express = require("express");
const {
    signup,
    login,
    getWriterProfile,
    getOneWriter,
} = require("../controllers/writerController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", auth, getWriterProfile); // Protected route
router.get("/:id", getOneWriter);

module.exports = router;
