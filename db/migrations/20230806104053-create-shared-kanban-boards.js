'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SharedKanbanBoards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      kanban_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Kanbans',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SharedKanbanBoards');
  },
};
