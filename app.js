const express = require("express");
const { createCanvas, loadImage } = require("canvas");

const app = express();
const port = 3001;
const fs = require("fs");
app.use(express.static("public"));

app.get("/api/image", async (req, res) => {
  try {
    jokenumber = getRandomInt(104);
    // jokenumber = 29;

    const jokesData = fs.readFileSync("jokes.json", "utf-8");
    const jokes = JSON.parse(jokesData);
    // console.log(jokes.size())
    var canvas = createCanvas(450, 150);
    const ctx = canvas.getContext("2d");

    // ctx.fillStyle = "#242423";
    // ctx.fillRect(0, 0, 300, 200);
    let grd = ctx.createLinearGradient(0, 0, 450, 150);
    grd.addColorStop(0, "#00a0ff");
    grd.addColorStop(1, "#12cba6");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 450, 150);

    ctx.strokeStyle = "#fff";
    ctx.rect(10, 10, 430, 130);
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "15px Arial";

    ctx.fillText("Q: " + jokes.jokes[jokenumber].question, 20, 50);
    ctx.fillText("A: " + jokes.jokes[jokenumber].answer, 20, 100);

    const svgString = canvas.toBuffer();

    res.contentType("image/svg");
    res.send(svgString);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
