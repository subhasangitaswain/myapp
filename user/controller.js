 const { Router, response } = require('express');
const express = require('express');
const router = express.Router();
const userService = require('./service');

// router.get('/',(req,res)=>{res.json('sample text');});
router.post('/authenticate', authenticate);
router.get('/', getAll);
router.post('/register', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err))
}

function create(req, res, next) {
    console.log(req.body);
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}