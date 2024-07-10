import { Router } from 'express';
import {
  getImageUrlHandler,
  getJsonUrlHandler,
} from '../controllers/cdn-controller';
import { fetchImageMiddleware } from '../middlewares/fetch-image-middleware';
import { fetchJsonMiddleware } from '../middlewares/fetch-json-middleware';

const cdnRouter = Router();

// JSON
cdnRouter.get(
  '/:patch/data/:lang/champion.json',
  getJsonUrlHandler('champions'),
  fetchJsonMiddleware
);
cdnRouter.get(
  '/:patch/data/:lang/champion/:champion.json',
  getJsonUrlHandler('champion'),
  fetchJsonMiddleware
);
cdnRouter.get(
  '/:patch/data/:lang/item.json',
  getJsonUrlHandler('item'),
  fetchJsonMiddleware
);
cdnRouter.get(
  '/:patch/data/:lang/summoner.json',
  getJsonUrlHandler('summoner'),
  fetchJsonMiddleware
);

// Images
cdnRouter.get(
  '/img/champion/splash/:championSplash.jpg',
  getImageUrlHandler('splash'),
  fetchImageMiddleware
);
cdnRouter.get(
  '/img/champion/loading/:championSplash.jpg',
  getImageUrlHandler('loading'),
  fetchImageMiddleware
);
cdnRouter.get(
  '/:patch/img/champion/:champion.png',
  getImageUrlHandler('champion'),
  fetchImageMiddleware
);
cdnRouter.get(
  '/:patch/img/item/:itemId.png',
  getImageUrlHandler('item'),
  fetchImageMiddleware
);
cdnRouter.get(
  '/:patch/img/passive/:champion.png',
  getImageUrlHandler('passive'),
  fetchImageMiddleware
);
cdnRouter.get(
  '/:patch/img/spell/:spellId.png',
  getImageUrlHandler('spell'),
  fetchImageMiddleware
);

export default cdnRouter;
