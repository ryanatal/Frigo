import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { verifyToken } from "./middleware/auth.js";

import authRoutes from "./routes/auth.js";
import pantryRoutes from "./routes/pantry.js";
import shoppingListRoutes from "./routes/shoppinglist.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* ROUTES */
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/pantry", verifyToken, pantryRoutes);
app.use("/api/v1/shoppinglist", verifyToken, shoppingListRoutes);
app.use("*", (req, res) => res.status(404).json({ message: "Not Found" }));

/* MONGOOSE */

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(process.env.PORT, () =>
            console.log(`Server running on port: ${PORT}`)
        )
    )
    .catch((error) => console.log(error.message));