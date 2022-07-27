import { Request, RestBindings, get, ResponseObject } from 

'@loopback/rest';
import { inject } from '@loopback/context';
import { EmailService } from "../services";

export class MailController {
  constructor(
    @inject ???
    public EmailService: MailService
  ) { }

  @get('/mail/acceptation')
  async sendEmail(email: string): Promise<any> {
    let info = await this.mailerService.sendMail({
      to: `${email}`,
      subject: 'testmail',
      html: '<p>Hallo</p>'
    })
    return info;
  }
}