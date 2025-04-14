const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const authRoutes = require("./Routes/Authentication .route");
const connectToDb = require("./config/server");
const movieRoutes = require("./Routes/movies.route");


const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.set("view engine", "ejs");


app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);

app.listen(8080, async () => {
    try {
        await connectToDb
        console.log("<<<<< Db connected >>>>>");
        console.log("<<<<< serve is started >>>>>");
    } catch (error) {
        console.log(error)
    }
})