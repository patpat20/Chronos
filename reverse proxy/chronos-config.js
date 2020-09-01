const chronos = require('chronos-tracker');

chronos.use({
  microservice: 'reverse-proxy',
  interval: 2000,
  // dockerized: true,
  database: {
    type: 'MongoDB',
    // URI: process.env.MONGO_URI,
    URI: "mongodb+srv://chronos:chronos@cluster0.tpeie.mongodb.net/chronos?retryWrites=true&w=majority"
  },
  notifications: [],
});