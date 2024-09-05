const mongoose = require('mongoose');
const Todos = require('../dbTodos');

// Get Todos List
const getTodos = async (req, res) => {
    try {
        const allTodos = await Todos.find({}).sort({ createdAt: -1 });
        res.status(200).send(allTodos);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
};

// Create a new Todo
const createTodo = async (req, res) => {
    const dbTodos = req.body;
    try {
        const newTodo = await Todos.create(dbTodos);
        res.status(200).send(newTodo);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
// Update a new Todo
const updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`There is no todo with id of ${id}`);
        }
        const todoID = { _id: id };
        const update = { completed: true };
        const updateTodo = await Todos.findOneAndUpdate(todoID, update);
        if (!updateTodo) {
            return res.status(404).send(`There is no todo with id of ${id}`);
        }
        res.status(200).send(updateTodo);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Update a new Todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`There is no todo with id of ${id}`);
        }
        const deleteTodo = await Todos.findOneAndDelete({ _id: id });
        res.status(200).send(deleteTodo);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};