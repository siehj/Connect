const router = require('express').Router();
const path = require('path');

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => err ? res.redirect(`/`): null)
});

module.exports = router;