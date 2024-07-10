import axios from 'axios';

export const fetchImageMiddleware = (req, res, next) => {
  const { imageUrl } = req;

  axios({
    url: imageUrl,
    method: 'GET',
    responseType: 'stream',
  })
    .then((response) => {
      res.setHeader('Content-Type', 'image/jpeg');
      response.data.pipe(res);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error fetching the image');
    });
};
