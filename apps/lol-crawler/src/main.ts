import axios from 'axios';
import express from 'express';
import championRouter from './routes/champion-router';
import crawlRouter from './routes/crawl-router';
import { connectToDatabase } from './utils/db';

axios.defaults.headers.common = {
  'X-Riot-Token': 'RGAPI-c52ea4bb-a302-4dd2-8460-8f2f7c081c7f',
};
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = express();

app.use('/crawl', crawlRouter);
app.use('/champion', championRouter);

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
