/**
 * Lugar.js
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
    id_tipolugar: {
      model: 'tipolugar'
    },
    id_usuario: {
      model: 'usuario'
    },
    dispositivoLugares: {
      collection: 'dispositivolugar',
      via: 'id_lugar'
    }
  },
};

