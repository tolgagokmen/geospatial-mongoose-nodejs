module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  mongo: {
    uri: 'mongodb://admin:12345@ds145370.mlab.com:45370/geolocation-db',
  },
};
