const chronos = require('chronos-tracker');

chronos.use({
  microservice: 'books',
  interval: 2000,
  dockerized: true,
  database: {
    type: 'MongoDB',
    URI:
      'mongodb+srv://gpk:gpk@cluster0.vej9l.mongodb.net/docker?retryWrites=true&w=majority',
  },
  // notifications: [],
});
