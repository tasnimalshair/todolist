'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Kanbans', {
      id: {
        primaryKey: true,
        autoIncrement: true,
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
        defaultValue: Sequelize.fn('NOW'),
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

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('Kanbans');

  }
};
