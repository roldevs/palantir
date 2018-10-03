import * as Sentry from '@sentry/node';
import bodyParser from 'body-parser';
import compression from 'compression';  // compresses requests
import errorhandler from 'errorhandler';
import express from 'express';
import session from 'express-session';
import lusca from 'lusca';
import morgan from 'morgan';
import path from 'path';

Sentry.init({ dsn: process.env.SENTRY_DNS });

process.env.PWD = process.cwd();
const staticsFolder = path.join(process.env.PWD!, '/public');
const app = express();

app.use(errorhandler());
app.set('port', process.env.PORT || 3000);
app.set('views', 'src/server/views');
app.set('view engine', 'pug');
// app.use(morgan('combined'));
// app.use(compression());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: process.env.SESSION_SECRET
// }));
// app.use(lusca.xframe('SAMEORIGIN'));
// app.use(lusca.xssProtection(true));
app.use(express.static(staticsFolder));

// app.use(
//   express.static('public', { maxAge: 31557600000 }),
// );

app.get('/', (_, res: any) => {
  res.render('home', {
    title: process.env.APP_NAME,
  });
});

app.listen(app.get('port'), () => {
  // tslint:disable:no-console
  console.log(staticsFolder);
  console.log('Hall app listening on port ' + app.get('port') + '!');
});
