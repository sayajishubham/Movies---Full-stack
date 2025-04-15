const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const authRoutes = require("./Routes/Authentication .route");
const connectToDb = require("./config/server");
const movieRoutes = require("./Routes/movies.route");
require("dotenv").config()


const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser())
app.set("view engine", "ejs");


app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);


const PORT = process.env.PORT

app.listen(PORT, async () => {
    try {
        await connectToDb
        console.log("<<<<< Db connected >>>>>");
        console.log("<<<<< serve is started >>>>>");
    } catch (error) {
        console.log(error)
    }
})