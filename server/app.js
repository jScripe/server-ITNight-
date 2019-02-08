const express = require("express");

const app = express();
const port = 8081;

app.get("/", (req, res) => {
    res.send("dratuti");
})

// log error
app.use((err) => {
    console.log(err)
})

app.listen(port, (err) => {
    if(err) {
        return console.log("Error: ", err);
    }
    console.log(`server is listening on ${port}`);
})