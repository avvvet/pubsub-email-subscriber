const dotenv = require('dotenv').config();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const SendEmailOTP = (_TO, _OTP) => {
    const _html = `
       <h3>Verify your new Account</h3>
       <p>To verify your account, please use the following One Time Password (OTP):</p>
       <p><strong><h2>${_OTP}</h2></strong></p>
       <p>Do not share this OTP with anyone. We take your account security very 
       seriously. Our Customer Service will never ask you to disclose or verify your 
       password, OTP, credit card, or banking account number. If you receive 
       a suspicious email with a link to update your account information, do not click on 
       the link—instead, report the email to us for investigation.</p>

       <p>Thank you,</p>
    `
    const msg = {
        to: _TO, 
        from: process.env.SENDGRID_VERIFIED_SENDER_1,
        subject: 'Verify your new account',
        text: 'and easy to do anywhere, even with Node.js',
        html: _html
      }

      sgMail.send(msg).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.error(error)
      })
}
module.exports = {SendEmailOTP};

  