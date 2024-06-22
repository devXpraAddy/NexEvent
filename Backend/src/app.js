const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const messageRouter = require("./routers/messageRouter");
const connectDB = require("./database/dbConnection");

dotenv.config();

const app = express();

// Middleware

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // this checks for the data types of the request
// if it is other than string

app.use(cors());

// Routes
app.use("/api/messages", messageRouter);

// Database Connection
connectDB();

module.exports = app;
