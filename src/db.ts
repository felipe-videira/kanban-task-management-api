import mongoose from 'mongoose';

export default () => {
    if (process.env.DB_URL) {
        mongoose.connect(process.env.DB_URL)
            .then(() => { console.log('Database connected successfully'); })
            .catch((error: unknown) => { console.error('Database connection error:', error); });
    } else {
        console.error("DB_URL not set")
    }
}