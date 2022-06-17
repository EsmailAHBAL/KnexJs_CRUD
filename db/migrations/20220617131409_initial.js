const { defaulColumn } = require("../../constants/defaults");
const { TB_USER } = require("../../constants/nameofTable");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async(knex) => {
    await Promise.all([
        knex.schema.createTable(TB_USER, table => {
            table.increments().notNullable()
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.datetime('create_at');
            defaulColumn(table);
        }),
    ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async(knex) => {
    await knex.schema.dropTable(TB_USER);
};