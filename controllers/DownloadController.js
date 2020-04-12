const ejs = require('ejs');
const pdf = require('html-pdf');
const path = require('path');
const fs = require('fs');

module.exports = {
  async download(req, response) {
    try {
      const obj = req.body.data.obj;
      const time = req.body.data.time;

      ejs.renderFile(`${__dirname}/template.ejs`, obj, (err, html) => {
        const namefile = time + '.pdf';
        const pathFile = `${__dirname}/pdfs/${namefile}`;
        pdf.create(html, {}).toFile(pathFile, (err, res) => {
          return response.status(200).send();
        });
      });
    } catch (error) {
      response.status(400).send('Error creating pdf, try again!');
    }
  },
  async fetchPdf(req, res) {
    const url = req.query.url;
    const namefile = url + '.pdf';
    const pathFile = `${__dirname}/pdfs/${namefile}`;
    res.sendFile(pathFile);
  },
};
