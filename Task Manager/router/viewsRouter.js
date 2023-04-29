const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
  console.log('Someone requested');
  res.status(200).render('login', {
    title: 'Log in',
  });

  next();
});

router.get('/signup', (req, res, next) => {
  console.log('Someone requested');
  res.status(200).render('signup', {
    title: 'Sign up',
  });

  next();
});

module.exports = router;
