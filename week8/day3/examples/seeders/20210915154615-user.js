'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
 

     await queryInterface.bulkInsert('Users', [{
      id: 1,
      firstName: "Cameron",
      lastName: "Mills",
      email: "something@email.com",
      createdAt: new Date,
      updatedAt: new Date(),
      }], {});

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
