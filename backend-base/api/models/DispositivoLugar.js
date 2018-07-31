/**
 * DispositivoLugar.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id_lugar: {
      model: 'lugar'
    },
    id_dispositivo: {
      model: 'dispositivo'
    },
    temperaturas: {
      collection: 'temperatura',
      via: 'id_dispositivoLugar'
    }
  },
};

