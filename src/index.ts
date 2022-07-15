import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nowPlayingRouter from "./routes/now-playing";
import topTracksRouter from "./routes/top-tracks";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/now-playing", nowPlayingRouter);

app.use("/top-tracks", topTracksRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
