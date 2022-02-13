import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    date: "",
    language: "",
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    // onAdd is a fuction passed via props
    // it takes a note object as parameter
    if (
      note.date === "" ||
      note.language === "" ||
      note.title === "" ||
      note.content === ""
    ) {
      console.log("getting here");
      toast.warn("Don't leave empty spaces", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } else {
      props.onAdd(note);
      setNote({
        date: "",
        language: "",
        title: "",
        content: "",
      });
      setIsExpanded(false);
    }
    event.preventDefault();
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <ToastContainer />
      <form className="create-note">
        {isExpanded && (
          <input
            name="date"
            onChange={handleChange}
            value={note.date}
            placeholder="Date"
          />
        )}

        {isExpanded && (
          <input
            name="language"
            onChange={handleChange}
            value={note.language}
            placeholder="Language"
          />
        )}

        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded} style={{ transitionDelay: "400ms" }}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
