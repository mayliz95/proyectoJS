/**
 * Tipolugar.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    lugares: {
      collection: 'lugar',
      via: 'tipolugarIdFK'
    }
  },
};

