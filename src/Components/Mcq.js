import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import firebase from "../firebase";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

//Components
import McqListItem from "./McqListItem";
import McqQuestion from "./McqQuestion";

function Mcq() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [mcqTitle, setMcqTitle] = useState([]);
  const [mcqQuestions, setMcqQuestions] = useState([]);
  const [itemClicked, setItemClicked] = useState(false);
  const collectionRefCourse = firebase.firestore().collection("course");

  useEffect(() => {
    collectionRefCourse.doc(courseId).onSnapshot((snap) => {
      setMcqTitle([...snap.data().mcq]);
    });
  }, []);

  return (
    <Container>
      <div className="mcq-list-container">
        {mcqTitle.length !== 0 ? (
          <>
            {mcqTitle.map((item, index) => (
              <McqListItem
                key={index}
                details={item}
                onClick={() => {
                  setItemClicked(true);
                  setMcqQuestions([...item.questions]);
                }}
              />
            ))}
          </>
        ) : (
          "Loading"
        )}
      </div>
      {itemClicked ? (
        <>
          <div className="questions-container">{mcqQuestions.length !== 0 && mcqQuestions.map((question, key) => <McqQuestion details={question} key={key} />)}</div>
        </>
      ) : (
        ""
      )}

      <div className="close-btn" onClick={() => navigate(`/course/${courseId}`)}>
        <CloseIcon className="close-icon" />
      </div>
    </Container>
  );
}

export default Mcq;

const Container = styled.div`
  width: calc(100vw - 320px);
  max-width: calc(100vw - 320px);
  height: calc(100vh - 70px);
  position: relative;
  left: 320px;
  padding: 25px 25px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  column-gap: 25px;

  .mcq-list-container {
    width: 310px;
    height: 100%;
    background-color: var(--bg-clr);
  }

  .questions-container {
    width: calc(100% - 320px - 50px);
    height: calc(100vh - 70px - 50px);
    overflow-y: auto;
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
    top: 20px;
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
