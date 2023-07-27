'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Tasks', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,

      },

      priority: {
        type: Sequelize.INTEGER,
      },


      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      createdAt: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Tasks');
  },
};








