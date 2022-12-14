"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const secretKey = process.env.JWT_SECRET_KEY || "";
var checkUserAuth = async (req, res) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];
            // Verifying Token
            const user = jsonwebtoken_1.default.verify(token, secretKey);
            let userId;
            if (typeof user !== "string") {
                userId = user.userId;
            }
        }
        catch (err) {
            console.log(err);
        }
    }
};
