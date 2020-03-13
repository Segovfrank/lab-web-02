const knex = require('../database/connection');
const bcrypt = require('bcrypt')

/**
 * Encuentra al usuario que tenga el correo indicado
 */
exports.find = (id) => {
  return knex
    .select('*')
    .from('users')
    .where('id', id)
    .first();
}

/**
 * Encuentra al usuario que tenga el correo indicado
 */
exports.findByEmail = (email) => {
  return knex
    .select('*')
    .from('users')
    .where('email', email)
    .first();
}

exports.getUserRole = (id) => {
  return knex
  .select('roles.role')
  .from('users')
  .where('users.id', id)
  .join('roles', {'users.role_id': 'roles.id'})
}

exports.getUsersWithRoles = () => {
  return knex
  .raw('select u.id, u.name, r.role from users u inner join roles r on r.id = u.role_id;');
}

/**
 * Crea al usuario con los datos definidos dentro del objeto user
 */
exports.create = (user) => {
  // Obtiene la contraseña definida por el usuario
  let pass = user.password;
  // Encripta la contraseña
  pass = bcrypt.hashSync(pass, 10);
  return knex('users')
    .insert({ name: user.name, email: user.email, password: pass, role_id: user.role_id });
}
