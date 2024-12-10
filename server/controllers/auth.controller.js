const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('../services/user.service')

class AuthController {
  async signup(req, res, next) {
    try {
      const { password, email, fullName } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      const newUserData = {
        email,
        full_name: fullName,
        password: hashPassword
      };

      const token = jwt.sign(newUserData, 'my-most-secret-token');

      await userService.createUser(newUserData)

      return res.json({
        message: 'User created successfully',
        data: token,
      });

    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { password, email } = req.body;

      const user = await userService.getUserByEmail(email);

      if (!user) {
        throw new Error('User not found');
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        throw new Error('Invalid password');
      }

      const token = jwt.sign({ email, password: user.password }, 'my-most-secret-token');

      return res.json({
        message: 'User logged successfully',
        data: token,
      });

    } catch (err) {
      next(err);
    }

  }
}

module.exports = new AuthController();
