const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const connect = mongoose.connect("mongodb+srv://agnidhra2k4:Z2EgVJ7YZAtjSMPd@cluster0.tustmd2.mongodb.net/nasa-login?retryWrites=true&w=majority&appName=Cluster0")

connect.then(() => {
    console.log("Database connected")
})
.catch((err) => {
    console.log(err);
    console.log("Database cannot be connected")
})

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

registerSchema.pre("save", async function(next){

    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10)
        next()
    }
    
})

const collection = new mongoose.model("users", registerSchema)

module.exports = collection