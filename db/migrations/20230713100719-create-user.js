'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      password: {
        type: Sequelize.STRING,
      },


      createdAt: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};





