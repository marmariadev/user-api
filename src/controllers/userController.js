const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createUser = async (req, res) => {
    try {
        const { error, value } = userService.validateUser(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const newUser = await userService.createUser(value);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).send('User not found.');

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { error, value } = userService.validateUser(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const updatedUser = await userService.updateUser(req.params.id, value);
        if (!updatedUser) return res.status(404).send('User not found.');

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) return res.status(404).send('User not found.');

        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
