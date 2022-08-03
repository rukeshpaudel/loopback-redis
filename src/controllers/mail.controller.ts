// import { Request, RestBindings, get, ResponseObject } from 

// '@loopback/rest';
// import { inject } from '@loopback/context';
// import { MailService } from "../services";

// export class MailController {
//   constructor(
//     @inject ???
//     public mailService: MailService
//   ) { }

//   @get('/mail/acceptation')
//   async sendEmail(email: string): Promise<any> {
//     let info = await this.mailerService.sendMail({
//       to: `${email}`,
//       subject: 'testmail',
//       html: '<p>Hallo</p>'
//     })
//     return info;
//   }
// }