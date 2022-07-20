import React from "react";
import styled from "styled-components";

function McqQuestion({ details }) {
  console.log(details);
  return (
    <Container>
      <div className="title-container">{details.q}</div>
      <div className="answers-container">
        <div className="all-answers">
          {details.ans.length !== 0 &&
            details.ans.map((answer, key) => (
              <div className="answer" key={key}>
                <span>{key + 1}.</span>
                <div className="ans">{answer}</div>
              </div>
            ))}
        </div>
        <div className="correct-answer">
          Correct Answer: <span>{details.correct}</span>
        </div>
      </div>
    </Container>
  );
}

export default McqQuestion;

const Container = styled.div`
  width: 100%;
  height: max-content;
  border-bottom: 1px solid var(--border-clr);
  padding: 25px 0;
  padding-right: 25px;

  .title-container {
    width: max-content;
    font-size: 1.2rem;
    font-weight: var(--font-w-4);
    margin-bottom: 10px;
  }

  .answers-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .answer {
      width: 400px;
      display: flex;
      align-items: flex-end;

      span {
        font-size: 0.8rem;
        color: var(--txt-clr-gray);
        margin-right: 10px;
      }

      .ans {
        display: flex;
        flex-wrap: wrap;
      }
    }

    .correct-answer {
      font-size: 0.8rem;
      color: var(--txt-clr-gray);

      span {
        font-size: 1rem;
        color: var(--txt-clr);
      }
    }
  }
`;
