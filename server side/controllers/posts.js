const mongoose = require("mongoose");
const Posts = require("../models/posts");
const { StatusCodes } = require("http-status-codes");
const { CustomAPIError, BadRequestError, NotFoundError } = require("../errors");

const getAllPost = async (req, res) => {
  const posts = await Posts.find({});
  res.status(StatusCodes.OK).json(posts);
};
const createPost = async (req, res) => {
  const post = await Posts.create(req.body);

  res.status(StatusCodes.CREATED).json(post);
};

const updatePost = async (req, res) => {
  const { id: postId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    throw new NotFoundError(`No post with that Id ${postId}`);
  }

  const post = await Posts.findOneAndUpdate({ _id: postId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!post) {
    throw new NotFoundError(`No Post with Id ${postId}`);
  }

  res.status(StatusCodes.OK).json(post);
};

const deletePost = async (req, res) => {
  const { id: postId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    throw new NotFoundError(`No post with Id ${postId}`);
  }

  const post = await Posts.findByIdAndRemove({ _id: postId });

  if (!post) {
    throw new NotFoundError(`No Post Found with Id ${postId}`);
  }

  res.status(StatusCodes.OK).json({ msg: "Post deleted Successfully" });
};

const likePost = async (req, res) => {
  const { id: postId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    throw new NotFoundError(`no post found with id ${postId}`);
  }

  const post = await Posts.findById(postId);

  if (!post) {
    throw new NotFoundError(`No post Found With id ${id}`);
  }

  const likedPost = await Posts.findByIdAndUpdate(
    { _id: postId },
    { likeCount: post.likeCount + 1 },
    { new: true, runValidators: true }
  );

  res.status(StatusCodes.OK).json(likedPost);
};

module.exports = { getAllPost, createPost, updatePost, deletePost, likePost };
