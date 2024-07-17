const express = require("express");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./Middlewares/index");
const userRouter = require("./Routes/user");

const app = express();
const port = 8000;

//connections
connectMongoDb().then(() => { console.log("MongoDB connected!"); });

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes());

//Routes
app.use("/api/users", userRouter);

app.listen(port, () => { console.log(`Server started at port ${port}`); });
