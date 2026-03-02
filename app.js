const express = require("express");
const app = express();

app.get("/fernando_alonso", (req, res, next) => {
    return res.status(200).sendFile("alonso.html", {root: './'});
});

app.get("/charles_leclerc", (req, res, next) => {
    return res.status(200).sendFile("leclerc.html", {root: './'});
});

app.get("/max_verstappen", (req, res, next) => {
    return res.status(200).sendFile("max.html", {root: './'});
}); 

app.use((req, res, next)=> {
    const error = new Error("Not found...");
    error.status = 404;
    next(error);
});

module.exports = app;   