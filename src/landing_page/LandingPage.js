import React from "react";
import "./LandingPage.css";
import { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";

const LandingPage = () => {
  const [selectedItem, setSelectedItem] = useState("name");
  //   useEffect(() => {
  //     fetch("https://randomuser.me/api/")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("API Response:", data);
  //         handleItemHover(selectedItem);
  //         setUserData(data.results[0]);
  //       })

  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, [selectedItem]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setUserData(data.results[0]);
        setHoverContent({
          title: `My ${selectedItem} is`,
          value:
            selectedItem === "name"
              ? `${data.results[0]?.name?.first} ${data.results[0]?.name?.last}`
              : selectedItem === "email"
              ? data.results[0]?.email
              : selectedItem === "dob"
              ? data.results[0]?.dob?.date
              : selectedItem === "address"
              ? `${data.results[0]?.location?.city}, ${data.results[0]?.location?.country}`
              : selectedItem === "contact"
              ? data.results[0]?.phone
              : selectedItem === "password"
              ? data.results[0]?.login?.password
              : "",
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const [userData, setUserData] = useState("");
  const [hoverContent, setHoverContent] = useState({
    title: "My name is",
    value: "loading...",
  });
  const [activeItem, setActiveItem] = useState("name");
  const HandleSelectedItem = (item) => {
    setSelectedItem(item);
    setActiveItem(item);
  };
  const handleItemHover = (item) => {
    setHoverContent({
      title: `My ${item} is`,
      value:
        item === "name"
          ? `${userData?.name?.first} ${userData?.name?.last}`
          : item === "email"
          ? userData?.email
          : item === "dob"
          ? userData?.dob?.date
          : item === "address"
          ? `${userData?.location?.city}, ${userData?.location?.country}`
          : item === "contact"
          ? userData?.phone
          : item === "password"
          ? userData?.login?.password
          : "",
    });
  };
  return (
    <>
      <div className="header-container">
        <h1>Random User Generator</h1>
        <p>
          A free,
          <a href="github.com"> open-source </a>
          API for generating random user data. Like Lorem Ipsum, but for people.
        </p>
        <p>
          <a href="https://twitter.com/randomapi">Follow us @randomapi</a>
        </p>
      </div>
      <div className="card-frame">
        <div className="card">
          <div className="details">
            <div className="user-image">
              <img src={userData.picture?.large}></img>
            </div>
            <p id="user-title">{hoverContent.title} </p>
            <br />
            <p id="user-value">{hoverContent.value}</p>
          </div>
          <div className="select-type">
            <ul className="value-list">
              <li
                onClick={() => HandleSelectedItem("name")}
                onMouseEnter={() => handleItemHover("name")}
                className={activeItem === "name" ? "active" : ""}
              >
                <GoPerson />
              </li>
              <li
                onClick={() => HandleSelectedItem("email")}
                onMouseEnter={() => handleItemHover("email")}
                className={activeItem === "email" ? "active" : ""}
              >
                email
              </li>
              <li
                onClick={() => HandleSelectedItem("dob")}
                onMouseEnter={() => handleItemHover("dob")}
                className={activeItem === "dob" ? "active" : ""}
              >
                dob
              </li>
              <li
                onClick={() => HandleSelectedItem("address")}
                onMouseEnter={() => handleItemHover("address")}
                className={activeItem === "address" ? "active" : ""}
              >
                address
              </li>
              <li
                onClick={() => HandleSelectedItem("contact")}
                onMouseEnter={() => handleItemHover("contact")}
                className={activeItem === "contact" ? "active" : ""}
              >
                contact
              </li>
              <li
                onClick={() => HandleSelectedItem("password")}
                onMouseEnter={() => handleItemHover("password")}
                className={activeItem === "password" ? "active" : ""}
              >
                password
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
