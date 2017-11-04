Promise = require('bluebird'); // eslint-disable-line no-global-assign
const { port } = require('../config/vars.config');
const app = require('../config/express.config');
const mongoose = require('../config/mongoose.config');

// Open mongoose connection
mongoose.connect();

// Listen to requests
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
