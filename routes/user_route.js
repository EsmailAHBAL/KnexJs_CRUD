const express = require('express')
const res = require('express/lib/response')
const {
    TB_USER
} = require('../constants/nameofTable')
const knex = require('../database/knex')
const route__User = express.Router()

route__User.get('/', (req, res, next) => {
    knex(TB_USER).select().then(users => {
        res.json({
            users: users,
        })
    })
})

route__User.post('/add', async(req, res) => {
    const {
        name,
        email,
        password
    } = req.body
    const user = {
        name: name,
        email: email,
        password: password,

    }
    await knex(TB_USER).insert(user).then(n => {
        console.log(n);
        res.json({
            message: "Added In Database",
        })
    })
})

route__User.put('/update/:id', (req, res) => {

    const {
        id
    } = req.params
    const {
        name,
        email,
        password
    } = req.body
    const userUpdate = {
        name: name,
        email: email,
        password: password,
    }
    knex(TB_USER).where('id', id).update(userUpdate, 'id')
        .then(up => res.json(up))
})
route__User.delete('/delete/:id', (req, res) => {
    const {
        id
    } = req.params
    console.log(id);
    knex(TB_USER)
        .where('id', id)
        .del().then(result => {
            res.json({
                result: 'deleted'
            })
        })
})
module.exports = {
    route__User,
}