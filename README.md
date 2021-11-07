# pubsub-email-notification-subscriber
This is a microservice using google pub/sub message broker to subscribe and receive real time events.

## Prerequisite 
you need to enable google pub/sub api in your GCP
you need to generate key role json file (key_subscribe.json) with pub/sub subscriber role
put the key file in your root directory

### .env
set GOOGLE_APPLICATION_CREDENTIALS=./key_subscribe.json. This key file is that you generated on your google account. While you create the key file only use the role for subscriber. 

## start the service 
* `npm install`

* `npm run start`

# external email service
 To sends email , this service uses sendgrid module, you need to insert your sendgrid api token in .env file.

you can experment google pub/sub features using this scafolding. 

Author 

Awet with love !


