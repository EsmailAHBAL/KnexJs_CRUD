// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
        client: 'pg',
        connection: {
            database: "esmail",
            user: "esmail",
            password: "esmail",
        },
        migrations: {
            directory: './db/migrations',
        },

    }
}