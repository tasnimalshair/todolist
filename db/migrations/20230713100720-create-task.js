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
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    },
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Tasks');
  },
};








