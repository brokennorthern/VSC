const express = require("express");
const app = express();
const PORT = 3000
const database = require("./database")

app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")


app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get("/index", (req, res) => {
    res.render("index.ejs", {
        polls,
    });
})

app.post("/results/:resID", (req, res) => {
    const data = req.body
    database.votePoll(data)
    const poll = database.getPoll(+data.pollID)

    if(!poll){
        res.status(404).render("404page.ejs")
        return
    }

    res.render("results.ejs",{
        poll,
    });
})

app.get("/poll/:pollId", (req, res) => {
    const id = +req.params.pollId
    const poll = database.getPoll(id)

    if(!poll){
        res.status(404).render("404page.ejs")
        return
    }
    
    res.render("poll.ejs",{
        poll,
    });

})



app.use(express.static("public"))

app.listen(PORT, () => {

    console.log('App listening on port 3000');
});