'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SharedKanbanBoards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      kanbanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Kanbans',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },


      createdAt: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SharedKanbanBoards');
  },
};
