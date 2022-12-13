import React from "react";
import "./ListPost.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ListPost() {
  const { id } = useParams();

  const post = useSelector((state) => state.post.data);

  const selectedPost = post.posts.filter((post) => post.id == id);
  return (
    <div>
      <header>
        {selectedPost.map((item) => (
          <div>
            {" "}
            <h1>{item.title}</h1>
            <div>{item.body}</div>
            <div>{item.tags}</div>{" "}
          </div>
        ))}
      </header>
    </div>
  );
}
