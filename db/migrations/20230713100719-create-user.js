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

      role: {
        type: Sequelize.STRING
      },


      createdAt: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false,
        type: Sequelize.DATE
      },

      createdBy: {
        type: Sequelize.STRING,
      },


      updatedAt: {
        type: Sequelize.DATE,
      },

      updatedBy: {
        type: Sequelize.STRING,
      },

      deletedAt: {
        type: Sequelize.DATE,
      },

      deletedBy: {
        type: Sequelize.STRING,
      },


    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};





