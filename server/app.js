const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const cors = require("cors");
const port=process.env.PORT || 4000;
const connectDB = require('./config/db');


const app = express();
// connect to database
connectDB();

//allow cros
app.use(cors());

// // Conncet to mongodb database
// mongoose.connect(process.env.MONGO_URI);
// mongoose.connection.once('open', ()=> {
//     console.log('connected to database');
// })



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true   // to diplay graphiql
}));    


app.listen(port, ()=> {
    console.log('Server running on port 4000')
});