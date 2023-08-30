import React from "react";

function QuestionList({questions}) {

 const questionsList = questions.map(question => <li key={question.prompt} >{question.prompt}</li>)

  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */ questionsList}</ul>
    </section>
  );
}

export default QuestionList;
