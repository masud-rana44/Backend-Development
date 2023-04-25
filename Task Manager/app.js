const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const userRouter = require('./router/userRouter');
const taskRouter = require('./router/taskRouter');
const AppError = require('./utils/appError');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

dotenv.config({ path: './config.env' });

// Mounting routes
app.use('/api/user', userRouter);
app.use('/api/task', taskRouter);

// Error Handling
app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
  });
});

// SERVER
// Connect mongodb useing mongoose
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on PORT ${port}`);
});
