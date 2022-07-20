import React from "react";
import styled from "styled-components";

function Note() {
  return (
    <Container>
      <p>Note</p>
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
`;
