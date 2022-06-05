import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = ({ setEdit }) => {
  const handleEdit = (e) => {
    setEdit(true);
  };
  const user = useSelector((state) => state.user);

  return (
    <>
      <header
        style={{
          backgroundColor: `${user.themeColor}`,
          backgroundImage: `linear-gradient(180deg,${user.themeColor} 2% ,${user.themeColor} 65% ,black 100%)`,
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
          <img src={user.avaUrl} alt="" className="info-ava" />
          <div className="info-username"> {user.name}</div>
          <div className="info-age">{user.age} </div>
          <div className="info-about">{user.about}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
