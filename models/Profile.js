const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String], // Array into the database
    required: true
  },
  bio: {
    type: String
  },
  social: {
    youtube: {
      type: string
    },
    twitter: {
      type: string
    },
    facebook: {
      type: string
    },
    linkedin: {
      type: string
    },
    instagram: {
      type: string
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
