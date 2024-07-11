const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const connect = mongoose.connect("mongodb://localhost:27017/nasa-website")

connect.then(() => {
    console.log("Database connected")
})
.catch(() => {
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