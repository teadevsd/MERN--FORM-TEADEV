const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173", // Change this to your frontend URL during local development
    methods: ["POST", "GET"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

mongoose.connect("mongodb+srv://Login:sCS7iNHqJVeletOv@cluster0.v75he.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("DataBase connected"))
.catch( err => console.log(err))


const childSchema = new mongoose.Schema({
    name: {
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

const userData = new mongoose.model('children', childSchema)

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userData.findOne({ email: email });
        if (user) {
            // Compare the entered password with the stored hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.json("success");
            } else {
                res.json("Incorrect password");
            }
        } else {
            res.json("No account found");
        }
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json("Server error during login");
    }
});


app.get( "/", (req, res)=>{
    res.json("Hello || TEADEV")
})



app.post('/register', async (req, res) => {
    console.log("Request body received:", req.body);
    const { name, email, password } = req.body;

    try {
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userData.create({
            name,
            email,
            password: hashedPassword,
        });
        console.log("Data saved to MongoDB:", newUser);
        res.json(newUser);
    } catch (err) {
        console.log("Error:", err);
        res.status(400).json(err);
    }
});



app.listen(8080, ()=>{
    console.log("server is running");
})