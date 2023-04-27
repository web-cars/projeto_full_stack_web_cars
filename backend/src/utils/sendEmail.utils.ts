import { createTransport } from "nodemailer";
import { AppError } from "../errors/errors";
import "dotenv";
import Mailgen from "mailgen";

interface ISendEmailRequest {
  to: string;
  subject: string;
  text: string;
}

const sendEmail = async ({ to, subject, text }: ISendEmailRequest) => {
  const tranporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await tranporter
    .sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html: text,
    })
    .then(() => {
      console.log("Email sended with success");
    })
    .catch((err) => {
      console.log(err);
      throw new AppError("Error sending email, try again later", 500);
    });
};

const resetPasswordTemplate = (
  userEmail: string,
  userName: string,
  protocol: string,
  host: string,
  resetToken: string
) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Web Cars",
      link: `${protocol}://localhost:5173/resetPassword/${resetToken}`,
    },
  });

  const email = {
    body: {
      name: userName,
      intro:
        "You have received this email because a password reset request for your account was received.",
      action: {
        instructions: "Click the button below to reset your password:",
        button: {
          color: "#4529E6",
          text: "Reset your password",
          link: `${protocol}://localhost:5173/resetPassword/${resetToken}`, //precisa ser o link da página de reset de password do frontend com um formulário, recebe o token e envia pro backend
        },
      },
      outro:
        "If you did not request a password reset, no further action is required on your part.",
    },
  };

  const emailBody = mailGenerator.generate(email);

  const emailTemplate = {
    to: userEmail,
    subject: "Reset password",
    text: emailBody,
  };

  return emailTemplate;
};

export { sendEmail, resetPasswordTemplate };
