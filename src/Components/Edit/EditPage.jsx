import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../InputField/InputField";
import { updateAll } from "../redux/apiRequests";
// import { update } from "../redux/useSlice";
import "./EditPage.css";
const Edit = ({ setEdit }) => {
  const avaUrl = [
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://i.redd.it/7ipyf6pvqac61.png",
    "https://i.redd.it/ksmb0m02ppy51.png",
    "https://i.redd.it/mozfkrjpoa261.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
    "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
  ];
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [url, setUrl] = useState(user.avaUrl);
  const [themeColor, setThemeColor] = useState(user.themeColor);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updateUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      themeColor: themeColor,
    };
    updateAll(updateUser, dispatch);
    // dispatch(update(updateUser));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <section className="edit-container">
          <button className="close">SAVE</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <InputField
              typeInput="input"
              label="Display Name"
              data={name}
              setData={setName}
            />
            <InputField
              typeInput="input"
              label="Age"
              data={age}
              setData={setAge}
            />
            <InputField
              typeInput="textarea"
              classStyle="input-about"
              label="About"
              data={about}
              setData={setAbout}
            />

            <label htmlFor="">Profile picture</label>
            <div className="input-image-container">
              {avaUrl.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  className="input-image"
                  alt=""
                  onClick={(e) => setUrl(e.target.src)}
                />
              ))}
            </div>

            <div className="theme-container">
              <InputField
                label="Theme"
                typeInput="color"
                classStyle="theme-color"
                data={themeColor}
                setData={setThemeColor}
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Edit;
