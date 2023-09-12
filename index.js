const app = require('./app.js');

//from environment files
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const port = process.env.RUNNING_PORT || 5500;
app.listen(port, ()=>{
   console.log(`Server running on port ${port}`);
});