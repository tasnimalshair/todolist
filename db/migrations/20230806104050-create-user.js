'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
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


      created_at: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      },

      created_by: {
        type: Sequelize.INTEGER,
      },


      updated_at: {
        type: Sequelize.DATE,
      },

      updated_by: {
        type: Sequelize.INTEGER,
      },

      deleted_at: {
        type: Sequelize.DATE,
      },

      deleted_by: {
        type: Sequelize.INTEGER,
      },


    });
  },

   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};

