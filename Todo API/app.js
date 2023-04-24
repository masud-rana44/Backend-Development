const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const userRouter = require('./router/userRouter');
const taskRouter = require('./router/taskRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

dotenv.config({ path: './config.env' });

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Wellcome from our homepage.',
  });
});

// Mounting routes
app.use('/api/user', userRouter);
app.use('/api/task', taskRouter);

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
