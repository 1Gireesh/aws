"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const connect_1 = __importDefault(require("./config/connect"));
const productRoute_1 = require("./routes/product/productRoute");
const userRoutes_1 = __importDefault(require("./routes/user/userRoutes"));
const google_1 = require("./controller/user/oAuth/google");
const mongoUrl = process.env.MONGOURL || "";
const port = 8080;
const app = (0, express_1.default)();
// For CORS Policy
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Just for checking the Home Route
app.all("/", (req, res) => setTimeout(() => res.send("works"), 6000));
app.use("/care", productRoute_1.careRouter);
app.use("/mind", productRoute_1.mindRouter);
app.use("/docter", productRoute_1.docterRouter);
// Loading Routes
app.use("/api/user", userRoutes_1.default);
app.use("/api/user", google_1.Orouter);
// Connecting to Mongo Database
(0, connect_1.default)(mongoUrl);
// Connecting App to the Localhost
app.listen(port, () => {
    console.log("Connected to http://localhost:" + port);
}).setTimeout(10000);
