const express = require("express")
const app = express()
const path = require("path")
const hbs = require('hbs')
const collection=require('./mongodb')
const templatepath=path.join(__dirname,"../templates")
app.use(express.json())
app.set("view engine", "hbs")
app.set("views",templatepath)
app.use(express.urlencoded({extended:false}))
app.get("/", (req,res) => {
    res.render("login")
})

app.get("/signup", (req,res) => {
    res.render("signup")
})

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        password:req.body.password
    }
    await collection.insertMany([data])
    res.redirect("https://phani2110.github.io/medical-management/");
})
app.post("/login", async (req, res) => {

    try {
        const check = await collection.findOne({ email:req.body.email })
        if (check.password === req.body.password) {
            // res.render("https://phani2110.github.io/medical-management/index.html")
            res.redirect("https://phani2110.github.io/medical-management/index.html");
        }
        else {
            res.send("Their is a error in passowrd");
           
        }
    }
    catch {
        res.send("Error in details");
    }
})

app.listen(4000, () => {
    console.log("port connection")
})