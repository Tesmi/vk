const express = require('express');
const nodemailer = require("nodemailer")

const mail = "vkentpbuiss@gmail.com"
const pass = "vwblyrijvbjxwacv"


const app = express();

app.get('/mail', (req, res) => {
  const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: mail,
    pass: pass // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: mail,
  to: 'tusharmaurya2001@gmail.com',
  subject: 'Contact From VKENPT Site',
  text: "Hello World!."
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.send("OK");
  }
});
});

app.listen(5000, () => console.log('Example app is listening on port 5000.'));
