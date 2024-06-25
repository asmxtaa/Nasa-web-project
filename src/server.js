const express = require("express");
const path = require("path");
const Users = require("./models/config")
const port = process.env.PORT || 5000

const app = express();

const template_path = path.join(__dirname, '../views')

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.set('views', template_path)

app.listen(port, () => {
    console.log('Server running on', port)
})

app.get("/", (req, res) => {
    res.render("welcome")
})

app.get("/login", (req, res) => {
    res.render('loginModal')
})

app.post("/", async(req, res) => {
    try {
        
        const userData = new Users({
            username: req.body.username,
            password: req.body.password
        })

        const user = await userData.save()
        res.status(201).render("welcome")

    } catch (error) {
        res.status(400).send(error)
    }
})