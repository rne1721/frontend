// lib/mongodb.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://<username>:<password>@<hostname>:<port/<database>?authSource=admin';

if (!MONGODB_URI) {
    throw new Error('Veuillez définir MONGODB_URI dans .env.local');
}

let cached = global.mongo;

if (!cached) {
    cached = global.mongo = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
