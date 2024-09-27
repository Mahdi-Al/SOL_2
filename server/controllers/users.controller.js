const User = require("../models/User");

module.exports.getAllTheUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    console.log("error in getAuthors controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports.createUser = async (req, res) => {
  try {
    const useradd = await User.create(req.body);
    res.status(201).send(useradd);
  } catch (error) {
    console.log("error in creating users controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const isExistUser = await User.findByPk(id);
    if (!isExistBook) {
      return res.status(404).json({ message: "user not found!" });
    }
    const newData = await isExistBook.update(req.body);
    res.status(200).send(newData);
  } catch (error) {
    console.log("error in update controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const isExistUser = await Book.findByPk(id);

    if (!isExistUser) {
      return res.status(404).json({ message: "user not found!" });
    }

    await isExistUser.destroy();
    res.status(204).end();
  } catch (error) {
    console.log("error in delete user controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
