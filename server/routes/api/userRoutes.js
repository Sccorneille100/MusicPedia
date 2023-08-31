const router = require('express').Router();

const {
  createUser,
  getSingleUser,
  login,
  getMe,
} = require('../../controllers/userController.js');

const { authMiddleware } = require('../../utils/auth');

// const { protect } = require('../../middleware/authMiddleware.js');

router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

// router.get('/me', protect, getMe)

module.exports = router
