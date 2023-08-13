'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
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


      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },


      kanban_id: {
        type: Sequelize.INTEGER,
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

    },
    );
  },

   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Tasks');
  },
};

