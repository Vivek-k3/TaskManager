require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const app = express();

const todo = require("./routes");

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("server is active"));

app.use("/api/todo", todo);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
