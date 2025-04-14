const express = require("express");
const { signUp, sigin } = require("../controller/Authentication.controller");
const { OtpCheck } = require("../config/auth.config");


const authRoutes = express.Router();
authRoutes.post("/signUp", signUp).post('/verify', OtpCheck).post("/sigin", sigin)


module.exports = authRoutes;