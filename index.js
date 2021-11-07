const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = process.env.port || 2727
const host = '127.0.0.1'
const { PubSub } = require('@google-cloud/pubsub')
const pubsub = new PubSub()
const dotenv = require('dotenv')
dotenv.config()
const { SendEmailOTP } = require('./service/email');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const sub = async () => {
    const subscriptionName = process.env.SUBSCRIPTION_NAME
    const subscription = pubsub.subscription(subscriptionName);
   
    const messageHandler = async (message) => {
        const data = JSON.parse(message.data)
        console.log(data)
        SendEmailOTP(data.email, data.otp);
        message.ack();
    };

    const errorHandler = (error) => {
        console.error(`ERROR: ${error}`);
        throw error;
    };

    subscription.on('message', messageHandler);
    subscription.on('error', errorHandler);

}

sub()

http.listen(port, host, () => {
    console.log(`microservice is started at http://${host}:${port} `)
})
