import React from "react";

function QuestionItem({ question, handleDeleteClick }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => {
    return (
      <option key={index} value={index}>
        {answer}
      </option>
    );
  });

  function onDeleteQuestion() {
    console.log("Delete");

    const config = {
      method: "Delete",
    };

    fetch(`http://localhost:4000/questions/${question}`, config)
      .then((res) => res.json())
      handleDeleteClick(question)
  }

  return (
    <li key={prompt}>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={onDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
