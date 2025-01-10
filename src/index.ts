import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import boardRoutes from './routes/boardRoutes'
import db from './db'

const app = express();
app.use(bodyParser.json());

db();

app.use('/api', boardRoutes);

app.listen(3000, () => { console.log('Server running on port 3000'); });