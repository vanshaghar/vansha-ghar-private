import EmailTemplate from '../../src/components/EmailTemplate';
import { Resend } from 'resend';
import { render } from '@react-email/render';

const api = process.env.NEXT_PUBLIC_RESEND_API_KEY;
const resend_email = process.env.NEXT_PUBLIC_RESEND_EMAIL;
const resend = new Resend(api);

export default async (req, res) => {
  const { name, phone, email, message } = req.body;

  const emailHtml = render(EmailTemplate({ name, phone, email, message }));

  const { data, error } = await resend.emails.send({
    from: 'VanshaGhar <info@vanshaghar.com>',
    to: [resend_email],
    subject: 'Contact Form Submission',
    html: emailHtml,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};