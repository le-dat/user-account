import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import EditPage from "./Components/Edit/EditPage.jsx";
import Posts from "./Components/Post/Posts.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import { useSelector } from "react-redux";
import MakePost from "./Components/Post/MakePost.jsx";

const App = () => {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpenPost] = useState(false);

  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);

  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <Posts />
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePost setOpenPost={setOpenPost} />
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      )}

      {/* loading && error */}
      {pending && <p className="loading">Loading....</p>}
      {!isEdit && error && <p className="error">Error !!!</p>}
    </div>
  );
};

export default App;
