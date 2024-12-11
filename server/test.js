const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport(
    {
        secure: true,
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: "sumansahaweb.dev@gmail.com",
            pass: "pwraankgwxhglsf",
        },
    }
);

// const mailOptions = {
//     from: "sumansahaweb.dev@gmail.com",
//     to: '8759127658itisaha@gmail.com',
//     subject: 'Test Email',
//     text: 'This is a test email sent from Nodemailer.',
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log('Error sending email:', error);
//     }
//     console.log('Email sent:', info.response);
// });

function sendMail(to, sub, msg) {
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


sendMail('8759127658itisaha@gmail.com', "Test Subject", "This is a plain test email");
