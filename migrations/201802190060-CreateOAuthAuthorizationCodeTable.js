    'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('oauth_authorization_code',
            {
                authorization_code: {
                  type: Sequelize.STRING(256),
                  primaryKey: true,
                  allowNull: false,
                  unique: true
                },
                expires: Sequelize.DATE,
                redirect_uri: Sequelize.STRING(2000),
                scope: Sequelize.STRING,
                valid: Sequelize.BOOLEAN,
                extra: Sequelize.JSON
            },
            {
                sync: {force: true}
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('oauth_authorization_code');
    }
};