const express = require("express"); //import express
const dotenv = require("dotenv"); //import the environment defining package of Node.js
const connectDB = require("./config/database"); //import MongoDB

dotenv.config(); //conect dotenv so it can read my .env file and load any called value inside it throughout my work
connectDB(); //connnect to the MongoDB

const app = express();
app.use(express.json());

app.use("/author", require("./routes/authorRoutes"));
app.use("/books", require("./routes/bookRoutes"));
app.use("/students", require("./routes/studentRoutes"));
app.use("/libraryAttendant", require("./routes/attendantRoutes"));

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Congratulations! The Library Server is now live on ${PORT}`);
});