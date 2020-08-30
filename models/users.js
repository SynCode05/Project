const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    bio: { type: String, default: null },
    bots: { type: Array, default: [], ref: 'Bots' },
    mod: { type: Boolean, default: false },
    admin: { type: Boolean, default: false }
});

module.exports = mongoose.model("Users", userSchema);
