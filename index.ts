import nodemailer, { Transporter } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const transporter: Transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: process.env.USER as string, // Ensure process.env.USER is defined as a string
    pass: process.env.PASS as string, // Ensure process.env.PASS is defined as a string
  },
  secure:false,
});

// Send email function
const sendEmail = async (): Promise<void> => {
  try {
    const info = await transporter.sendMail({
      from: '"Hi" <mohamednovastrid@gmail.com>', // Your sender email here
      to: "jameelahamed669@gmail.com", // Recipient email
      subject: "Hello ✔",
      text: "Hello world?", // Plain-text body
      html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", (error as Error).message);
  }
};

// Execute the sendEmail function
sendEmail();
