
import React, { useState } from "react";
import "../component/LoginForm.css"

const LoginForm = () => {
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [note, setnote] = useState(false);
  const [val, setval] = useState("You dont have any note");

  const [myarray, setmyarray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text) {
      const newarr = { id: new Date().getTime().toString(), title, text };
      setmyarray([...myarray, newarr]);
      settext("");
      settitle("");
      setval("");
      setnote(true);
    } else {
      alert("enter the input first");
    }
  };

  const handleRemove = (id) => {
    const removed = myarray.filter((value) => {
      return value.id !== id;
    });
    alert("would you like to remove")
    setmyarray(removed);
    
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Notes Application</h1> &nbsp;
        <form onSubmit={handleSubmit} className="value">
          <input
            className="text"
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="Enter title"
          />
          <br />
          <br />
          <textarea
            className="text"
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder="Enter Description"
            cols={20}
            rows={5}
          />
          <br />
          <input className="button" type="submit" />
        </form>
        <h1>{val}</h1>
      </div>
      <div className="destinations">
        {note ? (
          <div className="destination">
            {myarray.map((elem) => {
              return (
                <div>
                  <h1>Your Notes</h1>
                  <div key={elem.id}>
                    <h2>{elem.title}</h2>
                    <p>{elem.text} </p>
                    <button
                      className="button"
                      onClick={() => handleRemove(elem.id)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default LoginForm;