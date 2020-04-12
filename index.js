const app = require('./app');

const PORT = 3333;

app.listen(process.env.PORT || PORT, () => {
  console.log('Server running on PORT : ' + process.env.PORT || PORT);
});
