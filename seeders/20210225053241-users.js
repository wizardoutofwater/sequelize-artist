'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    let data = [];
    for(let i = 0; i < 10 ; i++){
      data.push({
        username: faker.internet.userName(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  
  await queryInterface.bulkInsert('users', data, {});
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
