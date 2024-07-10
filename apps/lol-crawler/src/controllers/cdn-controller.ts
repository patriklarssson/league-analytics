const BASE_URL = 'https://ddragon.leagueoflegends.com/cdn';

export const getJsonUrlHandler = (type) => (req, res, next) => {
  const { patch, champion, lang } = req.params;
  switch (type) {
    case 'champions':
      req.jsonUrl = `${BASE_URL}/${patch}/data/${lang}/champion.json`;
      break;
    case 'champion':
      req.jsonUrl = `${BASE_URL}/${patch}/data/${lang}/champion/${champion}.json`;
      break;
    case 'item':
      req.jsonUrl = `${BASE_URL}/${patch}/data/${lang}/item.json`;
      break;
    case 'summoner':
      req.jsonUrl = `${BASE_URL}/${patch}/data/${lang}/summoner.json`;
      break;
    default:
      return res.status(400).send('Invalid type');
  }
  next();
};
export const getImageUrlHandler = (type) => (req, res, next) => {
  const { patch, champion, itemId, spellId, championSplash } = req.params;

  switch (type) {
    case 'splash':
      req.imageUrl = `${BASE_URL}/img/champion/splash/${championSplash}.jpg`;
      break;
    case 'loading':
      req.imageUrl = `${BASE_URL}/img/champion/loading/${championSplash}.jpg`;
      break;
    case 'champion':
      req.imageUrl = `${BASE_URL}/${patch}/img/champion/${champion}.png`;
      break;
    case 'item':
      req.imageUrl = `${BASE_URL}/${patch}/img/item/${itemId}.png`;
      break;
    case 'passive':
      req.imageUrl = `${BASE_URL}/${patch}/img/passive/${champion}.png`;
      break;
    case 'spell':
      req.imageUrl = `${BASE_URL}/${patch}/img/spell/${spellId}.png`;
      break;
    default:
      return res.status(400).send('Invalid type');
  }
  next();
};
