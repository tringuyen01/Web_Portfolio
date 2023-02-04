import React from "react";

let id;
function Post(post) {
    id = post.id;
  return (
    <>
    <p>{post.email}</p>
      <p>{post.desc}</p>
    </>
  );
}
export default Post;

export {id};