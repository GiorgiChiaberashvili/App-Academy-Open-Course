// 'use strict';
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {


//     await queryInterface.addColumn(
//       'Musicians',
//       'BandId',
//       {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//           model: 'Bands',
//           key: 'id'
//         },
//         onDelete: 'cascade'
//       },
//     );
//   },
//   async down(queryInterface, Sequelize) {

//   }
// };

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Musicians', 'bandId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Bands',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Musicians', 'bandId');
  }
};
