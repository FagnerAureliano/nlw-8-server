import { MailAdapter, SendMailAdapter } from "../mail-adapter";

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3dce6be17b0ace",
    pass: "68eeea19d36627",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailAdapter) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Fagner Aureliano <fagner2aureliano@gmail.com>",
      subject,
      html: body,
    });
  }
}
