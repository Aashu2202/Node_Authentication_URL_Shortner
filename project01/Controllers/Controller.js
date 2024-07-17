const Users = require("../Models/Users");

async function handleGetAllUsers(req, res) {
    try {
        const allDbusers = await Users.find({});
        return res.json(allDbusers);
    } catch (error) {
        return res.status(500).json({ error: "Error fetching users" });
    }
}

async function handlegetUserById(req, res) {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ error: "Error fetching user" });
    }
}

async function handleUpdateUserById(req, res) {
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, { last_name: "gurjar" }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(updatedUser);
    } catch (error) {
        return res.status(500).json({ error: "Error updating user" });
    }
}

async function handleDeleteUserById(req, res) {
    try {
        const deletedUser = await Users.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json({ status: "success" });
    } catch (error) {
        return res.status(500).json({ error: "Error deleting user" });
    }
}

async function handleCreateUserById(req, res) {
    const { first_name, last_name, email, gender, job_title } = req.body;

    if (!first_name || !email) {
        return res.status(400).json({ error: "First name and email are required" });
    }

    try {
        const newUser = await Users.create({
            first_name,
            last_name,
            email,
            gender,
            job_title,
        });

        return res.status(201).json({ status: "success", user: newUser });
    } catch (error) {
        return res.status(500).json({ error: "Error creating user" });
    }
}

module.exports = {
    handleGetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUserById
};
