const User = require('../models/userModel');

const getAllUsers = async () => {
    return await User.find();
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const createUser = async (userDetails) => {
    const user = new User(userDetails);
    return await user.save();
};

const updateUser = async (id, userDetails) => {
    return await User.findByIdAndUpdate(id, userDetails, { new: true });
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
