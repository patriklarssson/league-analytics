import { Router } from 'express';
import { crawl } from '../controllers/crawl-controller';


const crawlRouter = Router();
crawlRouter.get('/', crawl);

export default crawlRouter;
