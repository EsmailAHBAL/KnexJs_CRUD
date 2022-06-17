const defaulColumn = (table) => {
    table.timestamps(false, true);
    table.datetime('delete_in');
}

module.exports = {
    defaulColumn,
}