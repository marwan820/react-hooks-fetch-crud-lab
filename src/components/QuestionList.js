import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({ questions, handleDeleteClick }) {
  const questionsList = questions.map((question) => {
    return (
      console.log(question.id),
      (
        <QuestionItem
          handleDeleteClick={handleDeleteClick}
          key={question.id}
          question={question}
        />
      )
    );
  });
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsList}</ul>
    </section>
  );
}

export default QuestionList;
