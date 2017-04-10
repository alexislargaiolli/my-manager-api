var moment = require('moment');
/**
 * HistoryEntry.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        title: 'string',
        content: 'string',
        date: {
            type: 'string',
            columnType: 'date',
            allowNull: true
        },
        project: {
            model: 'project'
        }
    },

    beforeUpdate: function(valuesToUpdate, cb) {
        if (valuesToUpdate.date) {
            valuesToUpdate.date = moment(new Date(valuesToUpdate.date)).format('YYYY-MM-DD HH:mm');
        }
        cb();
    }
};