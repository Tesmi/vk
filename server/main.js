const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const mail = "vkentpbuiss@gmail.com";
const pass = "vwblyrijvbjxwacv";
const to_mail = "krishnvedentp@gmail.com";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../", "build")));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../", "build", "index.html"));
});

app.get("/mail", async (req, res) => {
  const userMail = req.query.mail;
  const userPhone = req.query.phone;
  const userQuery = req.query.query;
  const userName = req.query.user;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mail,
      pass: pass, // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const mailOptions = {
    from: mail,
    to: to_mail,
    subject: "Contact From VKENPT Site",
    text: `Hello Admin!. A new user (${userName}) with email - ${userMail} and phone number - ${userPhone} is contacting your for his query - ${userQuery}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      console.log("Email sent: " + info.response);
      res.send("OK");
    }
  });
});

app.listen(5000, () => console.log("Example app is listening on port 5000."));
