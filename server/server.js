const express = require("express");
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, "..", "dist");
const port = process.env.PORT || 5000

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
})


app.listen(port, () => {
    console.log("Server started on 5000");
})