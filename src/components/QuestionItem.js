import React from "react";

function QuestionItem({ question, handleDeleteClick }) {
  const { id, prompt, answers, correctIndex } = question;

  //console.log(question)

  const options = answers.map((answer, index) => {
    return (
      <option key={index} value={index}>
        {answer}
      </option>
    );
  });

  function onDeleteQuestion() {
    const config = {
      method: "DELETE",
    };

    fetch(`http://localhost:4000/questions/${id}`, config)
      .then((res) => res.json())
      .then(handleDeleteClick(question));
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
