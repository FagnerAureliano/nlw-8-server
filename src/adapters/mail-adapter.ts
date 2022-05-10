export interface SendMailAdapter {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail: (data: SendMailAdapter) => Promise<void>;
}
