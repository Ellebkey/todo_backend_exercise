const express = require('express');
const router = express.Router();
const orgCtrl = require('../controllers/organizations.controller');
const authVerification = require('../middleware/authentication.middleware');

router.route('/')
  .all(authVerification.checkAuth)
  .get(orgCtrl.getAll)
  .post(orgCtrl.create);

router.route('/:id')
  .all(authVerification.checkAuth)
  .get(orgCtrl.getById)
  .patch(orgCtrl.create)
  .delete(orgCtrl.delete);


module.exports = router;
