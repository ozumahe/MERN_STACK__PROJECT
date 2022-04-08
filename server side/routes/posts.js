const express = require("express");
const router = express.Router();

const {
  getAllPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/posts");

router.route("/").get(getAllPost).post(createPost);
router.route("/:id/like").patch(likePost);
router.route("/:id").patch(updatePost).delete(deletePost);

module.exports = router;
