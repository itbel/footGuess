const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

require("dotenv").config();

mongoose
  .connect(process.env.DB_REMOTE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Successfully connected to the database.`);
  })
  .catch((error) => {
    console.log(error);
  });
mongoose.set("useCreateIndex", true);

const usersRouter = require("./routes/auth.route");
const tournamentRouter = require("./routes/tournaments.route");
const teamsRouter = require("./routes/teams.route");
const matchesRouter = require("./routes/matches.route");
const guessRouter = require("./routes/guess.route");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use("/api/users", usersRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/tournaments", tournamentRouter);
app.use("/api/matches", matchesRouter);
app.use("/api/guesses", guessRouter);

app.use((err, req, res, next) => {
  // handle errors in here
  res.status(500).send("Internal Server Error!");
});

/* app.use(express.static("footclient/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "footclient", "build", "index.html"));
}); */

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
