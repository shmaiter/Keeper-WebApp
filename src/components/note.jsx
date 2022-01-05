import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import Card from "react-bootstrap/Card";

/* <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>

      <button onClick={handleClick}>
        <HighlightOffOutlinedIcon />
      </button>
    </div> */

const Note = ({ id, date, language, title, content, onDelete }) => {
  function handleClick() {
    onDelete(id);
  }

  return (
    <Card className="note">
      <Card.Header>{language}</Card.Header>
      <Card.Body>
        <h1>{title}</h1>
        <p>{content}</p>
      </Card.Body>
      <Card.Footer className="">
        <small className="text-muted">{date}</small>
        <button onClick={handleClick}>
          <HighlightOffOutlinedIcon />
        </button>
      </Card.Footer>
    </Card>
  );
};

export default Note;
