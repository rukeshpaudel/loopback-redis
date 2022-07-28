// "use strict";
// import {injectable, /* inject, */ BindingScope} from '@loopback/core';
// import { Provider } from "@loopback/core";
// import { juggler } from "@loopback/service-proxy";
// const nodemailer = require("nodemailer");

// export interface EmailResponse
// {
//   output:{
//     from : string,
//     to : string,
//     subject : string,
//     html : string
//   }
// }

// export interface EmailParameter
// {
//     from : string,
//     to : string,
//     subject : string,
//     html : string
//   }


// export interface EmailService{
//   output(args: EmailParameter) : Promise<EmailResponse>

// }

// async function main() {
//   const testAccount = await nodemailer.createTestAccount();

//   const transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     secure: false, 
//     auth: {
//       user: process.env.USER, 
//       pass: process.env.PASS, 
//     },
//   });

  
//   let info = await transporter.sendMail({
//     from: '"Testacc" <test@example.com>',
//     to: "testreciever@example.com", 
//     subject: "Example Mail", 
//     text: "Exampe  mail testing ", 
//     html: "<h1>This is an example mail </h1>", 
//   });

// console.log("Message sent: %s", info.messageId);
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// main().catch(console.error);

// //-------------------------------------
// export type Mailtrap = unknown;

// @injectable({scope: BindingScope.TRANSIENT})
// export class MailtrapProvider implements Provider<Mailtrap> {
//   constructor(/* Add @inject to inject parameters */) {}

//   value() {
//     // Add your implementation here
//     throw new Error('To be implemented');
//   }
// }
