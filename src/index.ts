import 'dotenv/config'
import express from 'express';
import boardRoutes from './routes/boardRoutes'
import db from './db'

const app = express();
app.use(express.json());

db();

app.use('/api', boardRoutes);

if (process.env.API_PORT) {
    app.listen(process.env.API_PORT, () => { if (process.env.API_PORT) console.log('Server running on port ' + process.env.API_PORT); });
} else {
    console.log("API_PORT was not set")
}