import path from 'path';
import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from './services/mongoose.js';
import jwtAuth from './services/passport.js';
import authRoutes from './routes/auth.js';
import subjectRoutes from './routes/subject.js';
import questionRoutes from './routes/question.js';
import surveyRoutes from './routes/survey.js';
import multer from 'multer';
const app = express();

app.use(jwtAuth.initialize());
app.use(cors());

app.use((req, res, next) => {
  let contype = req.headers['content-type'];
  if (
    contype &&
    !(
      contype.includes('application/json') ||
      contype.includes('multipart/form-data')
    )
  )
    return res
      .status(415)
      .send({ error: 'Unsupported Media Type (' + contype + ')' });
  next();
});

app.use(bodyParser.json({ limit: '100mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 50000,
  })
);
const forms = multer();
app.use(forms.array());

const __dirname = path.resolve(path.dirname(''));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/user', authRoutes);


app.use('/subject', subjectRoutes);
app.use('/question', questionRoutes);
app.use('/survey', surveyRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Fond.');
  error.statusCode = 404;
  throw error;
});

app.use((error, req, res, next) => {
  console.log(error.message);
  res
    .status(error.status || 500)
    .json({ message: error.message, data: error.data });
});

const PORT = process.env.PORT || config.get('port');
app.listen(PORT);
