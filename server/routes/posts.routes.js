const { Router } = require("express");
const router = Router();

const {
  getAllThePosts,
  createPost,
  updatepost,
  deletepost,
} = require("../controllers/posts.controller");

/**
 *  @URL : /
 * @Status : PUBLIC
 * @method : GET
 * @description : Get all the
 */
router.get("/", getAllThePosts);
/**
 *  @URL : /
 * @Status : PUBLIC
 * @method : POST
 * @description : post all the
 */
router.post("/", createPost);
router.patch("/:id", updatepost);
router.delete("/:id", deletepost);
module.exports = router;
