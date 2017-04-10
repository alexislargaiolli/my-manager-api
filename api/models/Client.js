/**
 * Client.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        firstname: 'string',
        lastname: 'string',
        email: 'string',
        tel: 'string',
        addresses: {
            collection: 'address',
            via: 'client'
        },
        projects: {
            collection: 'project',
            via: 'clients'
        }

    },

};