const mongoose = require('mongoose');
const app= require('./app');
const port = 3000;

mongoose.connect('')
    .then(() => {
        console.log('Connected to MongoDB database');
    },
      err => { console.log('Connection to MongoDB failed', err); }
    );

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});