// index.js
// where your node app starts

// init project
import cors from 'cors';
import express from 'express';
import routes from './routes/route.js';

const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204
app.use(express.json())
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('/public'));

app.use(routes)


// Listen on port set in environment variable or default to 3000
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
