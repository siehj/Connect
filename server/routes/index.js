const router = require('express').Router();
const path = require('path');

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => err ? res.redirect(`/`): null)
});

router.post('/api/login', (req, res) => {
  console.log(req.body);
});

router.post('/api/signup', (req, res) => {
  console.log(req.body);
});

module.exports = router;