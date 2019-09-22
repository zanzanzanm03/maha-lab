const express = require("express");
const Mahalap = require("./maha-lap");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("เจริญพร"));
app.use("/public", express.static("public"));
app.get("/namo", (req, res) => {
  const day = req.query.day;
  const story = req.query.story;
  const time = req.query.time;
  const theholynumber = Mahalap.namo(day, story, time);
  res.json({
    result: theholynumber
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
