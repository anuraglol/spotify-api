import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/now-playing";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/now-playing", router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
