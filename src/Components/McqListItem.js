import React from "react";
import styled from "styled-components";

function McqListItem({ details, onClick }) {
  return (
    <Container onClick={onClick}>
      <p>{details.title}</p>
    </Container>
  );
}

export default McqListItem;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  border-bottom: 1px solid var(--border-clr);
  column-gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--txt-clr-gray);

  &:hover {
    border-bottom: 1px solid var(--txt-clr);
    color: var(--txt-clr);
  }
`;
