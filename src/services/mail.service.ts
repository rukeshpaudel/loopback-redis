"use strict";
const nodemailer = require("nodemailer");


async function main() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, 
    auth: {
      user: "f2315e41b19484", 
      pass: "35ffdd01356c42", 
    },
  });

  
  let info = await transporter.sendMail({
    from: '"Rukesh Paudel" <rukesh@example.com>',
    to: "getit@example.com, baz@example.com", 
    subject: "Test Mail", 
    text: "Hope you find this test mail ", 
    html: "<b>Hope you find this test mail </b>", 
  });

//  console.log("Message sent: %s", info.messageId);
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
