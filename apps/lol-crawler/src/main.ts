import axios from 'axios';
import express from 'express';
import championRouter from './routes/champion-router';
import crawlRouter from './routes/crawl-router';
import { connectToDatabase } from './utils/db';
import path from 'path';
import cdnRouter from './routes/cdn-router';

axios.defaults.headers.common = {
  'X-Riot-Token': 'RGAPI-341e1ef4-49aa-4b19-8a49-6835ed952a71',
};
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3200;
const app = express();

const assetsDataPath = path.join(__dirname, "assets/14.13.1/data/en_US");
const assetsImgPath = path.join(__dirname, "assets/14.13.1/img");
app.use(express.static(assetsDataPath));
app.use(express.static(assetsImgPath));

app.use('/crawl', crawlRouter);
app.use('/champion', championRouter);
app.use('/cdn', cdnRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

connectToDatabase()
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.error('Failed to connect to database', err);
    process.exit(1);
  });

app.on('error', console.error);
