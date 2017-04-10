/**
 * Note.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        title: 'string',
        project: {
            model: 'project'
        },
        priority: {
            type: 'number',
            isIn: [0, 1, 2],
            defaultsTo: 0
        },
        done: {
            type: 'boolean',
            defaultsTo: false
        }

    },

};