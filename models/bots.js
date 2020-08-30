const mongoose = require("mongoose");

const botSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    prefix: { type: String, required: true }, 
    library: { type: String, required: true },
    tags: { type: Array, required: true },
    owners: {
      mainOwner: { type: String, required: true },
      secondaryOwners: { type: Array, default: null },
    },
    description: {
      shortDescription: { type: String, required: true },
      longDescription: { type: String, required: true },
    },
    links: {
      inviteURL: { type: String, required: true },
      supportURL: { type: String, required: true },
      githubURL: { type: String, default: null },
      websiteURL: { type: String, default: null },
      vanityURL: { type: String, default: null },
    },
    votes: { 
      totalVotes: { type: Number, default: 0 },
      monthlyVotes: { type: Number, default: 0 },
    },
    stats: {
      guildCount: { type: Number, default: null },
      shardCount: { type: Number, default: null },
    },
    verified: { type: Boolean, default: false },
    token: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("Bots", botSchema);
