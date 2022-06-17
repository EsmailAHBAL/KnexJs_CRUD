const { TB_USER } = require("../constants/nameofTable");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries

    const user = {
        name: "xxxxx",
        email: "xxxxx@gmail.com",
        password: "xxxx",

    }
    await knex(TB_USER).insert(user);
};