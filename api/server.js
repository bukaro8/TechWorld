const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database.js');
//*Setting up config file
dotenv.config({ path: 'api/config/config.env' });

//*Connecting to DB
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT :${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
