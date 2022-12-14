"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginController_1 = __importDefault(require("../../controller/user/loginController"));
const router = express_1.default.Router();
const signupController_1 = __importDefault(require("./../../controller/user/signupController"));
// Public Routes
router.get("/", (req, res) => {
    res.send("User Routes Working");
});
router.post("/register", signupController_1.default.userRegistration);
router.post("/login", loginController_1.default.userLogin);
// Protected Routes
router.post("/changePassword", loginController_1.default.changeUserPassword);
exports.default = router;
