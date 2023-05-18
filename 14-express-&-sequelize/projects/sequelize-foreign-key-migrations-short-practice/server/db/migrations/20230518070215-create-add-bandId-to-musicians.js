'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.addColumn(
      'Musicians',
      'BandId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Bands',
          key: 'id'
        },
        onDelete: 'cascade'
      },
    );
  },
  async down(queryInterface, Sequelize) {

  }
};
