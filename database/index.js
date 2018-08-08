import mongoose from 'mongoose';
const database = process.env.DATABASE || 'mongodb://localhost/gottavueemall';

mongoose.connect(database);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('MongoDB is connected'));

export default db;