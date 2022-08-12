import {injectable, /* inject, */ } from '@loopback/core';
import {bind, BindingScope} from '@loopback/core';
import {EmailTemplate, NodeMailer, Customer} from '../models';
import {createTransport} from 'nodemailer';

@bind({scope: BindingScope.TRANSIENT})
export class EmailService {
 

  private static async setupTransporter() {
    return createTransport({
      host: process.env.SMTP_SERVER,
      port: +process.env.SMTP_PORT!,
      secure: false,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  async sendResetPasswordMail(customer: Customer): Promise<NodeMailer> {
    const transporter = await EmailService.setupTransporter();
    const emailTemplate = new EmailTemplate({
      to: customer.email,
      subject: '[LB4] Reset Password Request',
      html: `
      <div>
          <p>Hi there,</p>
          <p style="color: red;">We received a request to reset the password for your account</p>
          <p>To reset your password click on the link provided below</p>
          <a href="${process.env.APPLICATION_URL}/reset-password-finish.html?resetKey=${customer.resetKey}">Reset your password link</a>
          <p>If you didn’t request to reset your password, please ignore this email or reset your password to protect your account.</p>
          <p>Thanks</p>
          <p>LB4 team</p>
      </div>
      `,
    });
    return transporter.sendMail(emailTemplate);
  }
}