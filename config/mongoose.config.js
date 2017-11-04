const mongoose = require('mongoose');

const { mongo } = require('./vars.config');
// Set mongoose Promise to Bluebird
mongoose.Promise = Promise;

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

module.exports.connect = () => {
  mongoose.connect(mongo.uri, {
    keepAlive: 1,
    useMongoClient: true,
  });
  return mongoose.connection;
};
