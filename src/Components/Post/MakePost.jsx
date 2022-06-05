import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "../InputField/InputField";
import { createPost } from "../redux/postSlice";
import "./post.css";
import "../Edit/EditPage.css";

const MakePost = ({ setOpenPost }) => {
  const [title, setTitle] = useState("Add title !");
  const [desc, setDesc] = useState("Add title !");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const dispatch = useDispatch();

  const handlePost = () => {
    setOpenPost(false);
    const newPost = {
      title: title,
      desc: desc,
      tag: selectedIndex,
    };
    dispatch(createPost(newPost));
  };
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <div className="makepost-save" onClick={handlePost}>
          Post
        </div>
      </div>
      <div className="input-container">
        <InputField
          typeInput="input"
          data={title}
          setData={setTitle}
          label="Title"
          className="makepost-title"
        />
        <InputField
          typeInput="textarea"
          data={desc}
          setData={setDesc}
          label="Description"
          className="makepost-desc"
        />
      </div>
      <label htmlFor="">Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className={`${
                selectedIndex === index
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePost;
