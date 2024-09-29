const { Router } = require("express");
const {
  getAllTheUsers,
  createUser,
  updateUser,
  deleteUser,
  getAllThePostsForUser,
} = require("../controllers/users.controller");
const routerUser = Router();
/**
 *  @URL : /users
 * @Status : PUBLIC
 * @method : GET
 * @description : Get all the users
 */
routerUser.get("/", getAllTheUsers);
/**
 *  @URL : /users/:id
 * @Status : PUBLIC
 * @method : PATCH
 * @description : update a user with id
 */
routerUser.patch("/:id", updateUser);
/**
 *  @URL : /users
 * @Status : PUBLIC
 * @method : POST
 * @description :post a user
 */
routerUser.post("/", createUser);
/**
 *  @URL : /users/:id
 * @Status : PUBLIC
 * @method : DELETE
 * @description :delete a user with id
 */
routerUser.delete("/:id", deleteUser);
module.exports = routerUser;
/**
 *  @URL : /users
 * @Status : PUBLIC
 * @method : DELETE
 * @description :delete a user with id
 */
/**
 *  @URL : /posts/:id/posts
 * @Status : PUBLIC
 * @method : GET
 * @description : Get all the
 */
routerUser.get("/:userId/posts", getAllThePostsForUser);
