const knex = require("../database/connection.js");

class UserService {
  async createUser(userData) {
    const userResult = await knex('users').insert(userData).returning('*');
    return userResult[0];
  }

  async getUserByEmail(email) {
    return knex('users').where({ email }).first();
  }
}

module.exports = new UserService();
