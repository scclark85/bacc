require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require("path");
const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('build'));


app.post('/api/form', (req, res) => {
    console.log(req.body)

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3> Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Zip: ${req.body.zip}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: "gmail",
            // no port needed for gmail
            auth: {
                user: process.env.NODEMAILER_ADDRESS,
                pass: process.env.NODEMAILER_PASSWORD
            }
        })

        let mailOptions = {
            from: 'form@form.com',
            to: process.env.NODEMAILER_ADDRESS,
            subject: 'You Have A New Contact',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log("Message Sent: %s", info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    });
});

const PORT = process.env.PORT || 8080

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname + "/build/index.html"));
  });

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});
