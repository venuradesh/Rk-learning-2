import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import firebase from "../firebase";

//Components
import McqListItem from "./McqListItem";

function Mcq() {
  const { courseId } = useParams();
  const [mcqTitle, setMcqTitle] = useState([]);
  const [mcqQuestions, setMcqQuestions] = useState([]);
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
            {mcqTitle.map((item) => (
              <McqListItem details={item} />
            ))}
          </>
        ) : (
          "Loading"
        )}
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

  .mcq-list-container {
    width: 310px;
    height: 100%;
    background-color: var(--bg-clr);
  }
`;
