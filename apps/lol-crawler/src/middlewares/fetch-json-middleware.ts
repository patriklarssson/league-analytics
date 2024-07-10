import axios from 'axios';

export const fetchJsonMiddleware = async (req, res, next) => {
  const { jsonUrl } = req;
  try {
    const response = await axios.get(jsonUrl);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching the JSON data');
  }
};
