import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";
import UserRoutes from "./routes/user.js";
import tokenRoutes from "./routes/refresh-token.js";

// initializing express app
const app = express();

// connecting to hosted(atlas) DB
connectDB();

// body parser
app.use(express.json());

// enabling cors
app.use(
  cors({
    origin: "*",
  })
);

// router middlewares
app.use("/user", UserRoutes);
app.use("/refresh-token", tokenRoutes);

// setting port number dynamically
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server is running at ${PORT} port`));
