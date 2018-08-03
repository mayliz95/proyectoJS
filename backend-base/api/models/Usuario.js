/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreUsuario: {
      type: 'string',
      required: true
    },
    correo: {
      type: 'string',
      required: true
    },
    avatar: {
      type: 'string',
      required: true
    },
    contraseña: {
      type: 'string',
      required: true
    },
    sesiones: {
      collection: 'sesion',
      via: 'id_usuario'
    },
    dispositivos: {
      collection: 'dispositivo',
      via: 'id_usuario'
    },
    lugares: {
      collection: 'lugar',
      via: 'id_usuario'
    }
  },
};

