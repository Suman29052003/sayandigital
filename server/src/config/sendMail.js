const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport(
    {
        secure: true,
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: "8759127658itisaha@gmail.com",
            pass: "devfrfxndjuwuggd",
        },
    }
);

const sendMail = (to, sub, msg) =>  {
    transporter.sendMail(
        {
            to: to,
            subject: sub,
            html: msg,
        },
        (error, info) => {
            if (error) {
                return console.log("Error sending email:", error);
            }
            console.log("Email sent:", info.response);
        }
    );
}


// sendMail('sumansahaweb.dev@gmail.com', "Test Subject", "This is a plain test email");
module.exports = sendMail;