const express = require('express');
const DownloadController = require('./controllers/DownloadController');

const routes = express.Router();

routes.post('/download', DownloadController.download);
routes.get('/fetch-pdf', DownloadController.fetchPdf);
routes.get('/', (req, res) => {
  res.send('Hello backend');
});
module.exports = routes;
