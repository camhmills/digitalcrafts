'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('todo', [{
    id: 1,
    todoitem: 'Test the database',
    createdAt: new Date(),
    updatedAt: new Date(),
     }], 
     {}
     );
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
