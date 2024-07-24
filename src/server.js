const express = require("express");
const path = require("path");
const Users = require("./models/config")
const bcrypt = require("bcryptjs")
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

// app.get("/", (req, res) => {
//     res.render("welcome")
// })

// app.get("/login", (req, res) => {
//     res.render('loginModal')
// })

app.get("/home", (req, res) => {
    res.redirect("/homepage.html")
})

app.post("/", async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        const userData = await Users.findOne({username: username})

        const isMatched = await bcrypt.compare(password, userData.password)
        if(isMatched){
            res.redirect("/home")
        } else{
            res.send("Invalid password")
        }

    } catch (error) {
        res.status(400).send(error)
    }
})

app.post("/register", async(req, res) => {
    try {
        
        const password = req.body.password
        const cpassword = req.body.confirmPassword

        if(password == cpassword){
            const userData = new Users({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: password
            })
            const user = await userData.save()
            res.status(201).render("homepage")
        }
        else{
            res.status(400).send("invalid credentials")
        }
        

    } catch (error) {
        res.status(400).send(error)
    }
})

app.get("/register", (req, res) => {
    res.render('register')
})  

