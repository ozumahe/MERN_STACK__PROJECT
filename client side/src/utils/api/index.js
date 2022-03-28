import axios from "axios";

const url = "http://localhost:5000/api/v1/posts";

export const fetchPosts = () => axios.get(url);
export const newPost = (post) => axios.post(url, post);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
