import EmailTemplate from '../../src/components/EmailTemplate';
import { Resend } from 'resend';
import { render } from '@react-email/render';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async (req, res) => {
  const { name, phone, email, message } = req.body;
  
  const emailHtml = render(EmailTemplate({ name, phone, email, message }));
  
  const { data, error } = await resend.emails.send({
    from: 'VanshaGhar <info@vanshaghar.com>',
    to: ['blackkspydo@gmail.com'],
    subject: 'Hello world',
    html: emailHtml,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};