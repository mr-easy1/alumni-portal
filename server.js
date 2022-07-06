let express = require("express");

let app = express();

app.use(express.static(__dirname + "/dist/alumni-portal"));

app.get("/*", (req, resp) => {
  resp.sendFile(__dirname + "/dist/alumni-portal/index.html");
});

app.listen(process.env.PORT || 8080);
