const post = (post = [], action) => {
  switch (action.type) {
    case "DELETE":
      return post.filter((pos) => pos._id !== action.payload);
    case "UPDATE":
      return post.map((postdata) =>
        postdata._id === action.payload._id ? action.payload : postdata
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...post, action.payload];
    default:
      return post;
  }
};

export default post;
