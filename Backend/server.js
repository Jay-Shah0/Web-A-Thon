const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/DB")
const UserRoutes = require("./Routes/UserRoutes")
const { notFound, errorHandler } = require("./middleware/ErrorMiddleware");
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // specify the origin of your frontend app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable credentials (cookies, headers), if needed
}));



dotenv.config();
connectDB();

app.use(express.json());

app.get("/", (req,res)=> {
    res.send("API is runing");
});
app.use('/user',UserRoutes)
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT

app.listen(PORT,console.log(`Server Started on Port ${PORT}`));