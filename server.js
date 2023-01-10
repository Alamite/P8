const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use("/images", express.static(path.resolve(__dirname, "images")));


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
    res.sendFile(path.resolve(__dirname, "images", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running...PORT 3000"));
