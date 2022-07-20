import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import { useParams, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function Note() {
  const collectionRefCourse = firebase.firestore().collection("course");
  const [notes, setNotes] = useState([]);
  const [closeClick, setCloseClick] = useState(false);
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    collectionRefCourse.doc(courseId).onSnapshot((snap) => {
      setNotes([...snap.data().note]);
    });
  }, []);

  return (
    <Container>
      <div className="name-container">Notes</div>

      <div className="note-items-container">
        {notes.length !== 0 &&
          notes.map((note, key) => (
            <a href={note.link} target="_blank" className="note-item" key={key}>
              <div className="title-container">{note.title}</div>
              <a href={note.link} target="_blank">
                {note.link}
              </a>
            </a>
          ))}
      </div>

      <div className="close-btn" onClick={() => navigate(`/course/${courseId}`)}>
        <CloseIcon className="close-icon" />
      </div>
    </Container>
  );
}

export default Note;

const Container = styled.div`
  width: calc(100vw - 320px);
  max-width: calc(100vw - 320px);
  height: calc(100vh - 70px);
  position: relative;
  left: 320px;
  padding: 25px 25px;
  overflow: hidden;
  transition: all 0.3s ease;

  .name-container {
    width: 97%;
    height: 60px;
    background-color: var(--bg-clr);
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    padding-left: 20px;
    font-weight: var(--font-w-4);
    margin-bottom: 25px;
  }

  .note-items-container {
    width: 100%;
    height: calc(100% - 60px - 25px);
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;

    .note-item {
      width: 90%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      padding: 0 25px;
      align-items: center;
      border-bottom: 1px solid var(--border-clr);
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--txt-clr);

        .title-container {
          color: var(--txt-clr);
        }
        a {
          color: var(--txt-clr);
        }
      }

      .title-container {
        font-size: 1.2rem;
        color: var(--txt-clr-gray);
        transition: all 0.3s ease;
      }

      a {
        color: var(--txt-clr-gray);
        transition: all 0.3s ease;
      }
    }
  }

  .close-btn {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: var(--bg-clr);
    box-shadow: 0 0 5px 0 var(--txt-clr-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 30px;
    right: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    .close-icon {
      font-size: 1rem;
    }
  }
`;
