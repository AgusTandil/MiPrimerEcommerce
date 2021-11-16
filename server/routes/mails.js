const express = require(`express`);
const router = express.Router();

const mails_controller = require("../controllers/mails.controller");

const { sendEmail } = mails_controller;

router.post(`/sendEmail`, sendEmail);

module.exports = router;
