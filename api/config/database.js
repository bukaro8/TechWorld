const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // strictQuery: false,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    });
};
module.exports = connectDatabase;
