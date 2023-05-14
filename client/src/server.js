// const MongoClient = require('mongodb').MongoClient;

// const config = {
//     username: 'denis',
//     password: 'dekodeko200318',
//     server: 'cluster0.tnuwrfn.mongodb.net'
// };

// const connectDB = async () => {
//     const url = `mongodb+srv://${config.username}:${config.password}@${config.server}/test?retryWrites=true&w=majority`;
//     const client = await MongoClient.connect(url);
//     const db = client.db('WeatherBD');
//     return { client, db };
// }

// module.exports = connectDB;