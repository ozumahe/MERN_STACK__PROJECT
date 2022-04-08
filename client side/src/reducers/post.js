import * as actionTypes from "../constants/actionTypes";

const post = (post = [], action) => {
  switch (action.type) {
    case actionTypes.LIKE_POST:
      return post.map((postData) =>
        postData._id === action.payload._id ? action.payload : postData
      );
    case actionTypes.DELETE:
      return post.filter((pos) => pos._id !== action.payload);
    case actionTypes.UPDATE:
      return post.map((postdata) =>
        postdata._id === action.payload._id ? action.payload : postdata
      );
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE:
      return [...post, action.payload];
    default:
      return post;
  }
};

export default post;
