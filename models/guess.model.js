const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Guess = new Schema({
  matchid: {
    type: Schema.Types.ObjectId,
    ref: "match",
    required: true,
  },
  teamAguess: { type: Number, required: true },
  teamBguess: { type: Number, required: true },
  userid: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("guess", Guess);
