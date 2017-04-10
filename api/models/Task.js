/**
 * Task.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        title: 'string',
        description: 'string',
        project: {
            model: 'project'
        },
        state: {
            type: 'number',
            isIn: [0, 1, 2, 3],
            defaultsTo: 0
        }

    },

};