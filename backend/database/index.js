import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/gottavueemall');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('MongoDB is connected'));

export default db;