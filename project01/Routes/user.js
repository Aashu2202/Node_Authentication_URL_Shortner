const express = require("express");
const {
    handleGetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUserById
} = require("../Controllers/Controller");

const router = express.Router();

router.get("/", handleGetAllUsers);

router.route("/:id")
    .get(handlegetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

router.post('/', handleCreateUserById);

module.exports = router;
