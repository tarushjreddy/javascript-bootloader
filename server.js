const express = require("express");

const app = express();
var path = require("path");
const port = process.env.PORT || 3000;
app.use(express.static("public"));

// sendFile will go here

app.listen(port);
console.log("Server started at http://localhost:" + port);
// Without middleware
app.get("/", function (req, res) {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = "index.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});
