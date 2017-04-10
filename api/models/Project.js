var moment = require('moment');
/**
 * Project.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        name: 'string',
        description: 'string',
        user: {
            model: 'user'
        },
        plannedStartDate: {
            type: 'string',
            columnType: 'date',
            allowNull: true
        },
        startDate: {
            type: 'string',
            columnType: 'date',
            allowNull: true
        },
        plannedEndDate: {
            type: 'string',
            columnType: 'date',
            allowNull: true
        },
        endDate: {
            type: 'string',
            columnType: 'date',
            allowNull: true
        },
        progress: {
            type: 'number',
            defaultsTo: 0
        },
        state: {
            type: 'number',
            isIn: [0, 1, 2, 3, 4],
            defaultsTo: 0
        },
        tasks: {
            collection: 'task',
            via: 'project'
        },
        notes: {
            collection: 'note',
            via: 'project'
        },
        gains: {
            collection: 'gain',
            via: 'project'
        },
        clients: {
            collection: 'client',
            via: 'projects',
            dominant: true
        },
        history: {
            collection: 'historyEntry',
            via: 'project'
        }

    },
    beforeUpdate: function(valuesToUpdate, cb) {
        if (valuesToUpdate.plannedStartDate) {
            valuesToUpdate.plannedStartDate = moment(new Date(valuesToUpdate.plannedStartDate)).format('YYYY-MM-DD HH:mm');
        }
        if (valuesToUpdate.startDate) {
            valuesToUpdate.startDate = moment(new Date(valuesToUpdate.startDate)).format('YYYY-MM-DD HH:mm');
        }
        if (valuesToUpdate.plannedEndDate) {
            valuesToUpdate.plannedEndDate = moment(new Date(valuesToUpdate.plannedEndDate)).format('YYYY-MM-DD HH:mm');
        }
        if (valuesToUpdate.endDate) {
            valuesToUpdate.endDate = moment(new Date(valuesToUpdate.endDate)).format('YYYY-MM-DD HH:mm');
        }
        cb();
    }
};