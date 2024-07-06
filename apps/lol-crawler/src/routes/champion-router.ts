import { Router } from 'express';
import { getAllChampions, getChampion } from '../controllers/champion-controller';


const championRouter = Router();
championRouter.get('/all', getAllChampions);
championRouter.get('/:champion', getChampion);

export default championRouter;
