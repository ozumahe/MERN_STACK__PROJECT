const Posts = require("../models/posts");
const { StatusCodes } = require("http-status-codes");
const { CustomAPIError, BadRequestError, NotFoundError } = require("../errors");

const getAllPost = async (req, res) => {
  const posts = await Posts.find({});
  res.status(StatusCodes.OK).json({ counts: posts.length, posts });
};
const createPost = async (req, res) => {
  const post = await Posts.create(req.body);

  res.status(StatusCodes.CREATED).json({ post });
};

module.exports = { getAllPost, createPost };
