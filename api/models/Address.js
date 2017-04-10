/**
 * Address.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        streetNumber: 'string',
        street: 'string',
        city: 'string',
        zipcode: 'number',
        client: {
            model: 'client'
        }

    },

};