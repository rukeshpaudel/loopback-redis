"use strict";
const nodemailer = require("nodemailer");


async function main() {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, 
    auth: {
      user: "f2315e41b19484", 
      pass: "35ffdd01356c42", 
    },
  });

  
  let info = await transporter.sendMail({
    from: '"Testacc" <test@example.com>',
    to: "testreciever@example.com", 
    subject: "Example Mail", 
    text: "Exampe  mail testing ", 
    html: "<h1>This is an example mail </h1>", 
  });

console.log("Message sent: %s", info.messageId);
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
