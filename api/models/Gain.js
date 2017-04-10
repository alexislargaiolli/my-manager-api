var moment = require('moment');
/**
 * Gain.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        title: 'string',
        dueDate: {
            type: 'string',
            columnType: 'date',
            allowNull: true
        },
        project: {
            model: 'project'
        },
        budget: 'number',
        paidDate: {
            type: 'string',
            columnType: 'date',
            allowNull: true
        },
        devis: {
            type: 'boolean',
            defaultsTo: false
        },
        invoiced: {
            type: 'boolean',
            defaultsTo: false
        },
        paid: {
            type: 'boolean',
            defaultsTo: false
        }

    },
    beforeUpdate: function(valuesToUpdate, cb) {
        if (valuesToUpdate.dueDate) {
            valuesToUpdate.dueDate = moment(new Date(valuesToUpdate.dueDate)).format('YYYY-MM-DD HH:mm');
        }
        if (valuesToUpdate.paidDate) {
            valuesToUpdate.paidDate = moment(new Date(valuesToUpdate.paidDate)).format('YYYY-MM-DD HH:mm');
        }
        cb();
    }
};