const express = require("express");
const app = express();
const port = 3009;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})