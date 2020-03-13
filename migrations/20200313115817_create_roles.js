
exports.up = function(knex) {
    return knex.schema
      .createTable('roles', (roles) => {
        roles.increments('id');
        roles.string('role', 255).notNullable();
      })
      .createTable('users', (table) => {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('password', 512).notNullable();
        table.integer('role_id').references('id').inTable('roles').notNullable();
        table.timestamps(true, true);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('users')
      .dropTable('roles');
  };
  