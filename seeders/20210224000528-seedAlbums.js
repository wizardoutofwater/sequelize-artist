'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [];
    for(let i = 0; i < 20 ; i++){
      data.push({
        name: faker.lorem.sentence(),
        year: faker.random.number({
          'min': 1970,
          'max': 2020
        }),
        artist_id: faker.random.number({
          'min': 2,
          'max': 11
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
   await queryInterface.bulkInsert('albums', data, {});
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
