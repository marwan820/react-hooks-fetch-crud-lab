import React from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({ questions, onRemoveQuestion }) {
  // function onDeleteQuestion(){
  // fetch(`http://localhost:4000/questions/${questions.id}`,{
  //   method: "DELETE"
  //   })
  //   .then((r)=> r.json())
  //   .then((questionsData) => onRemoveQuestion(questionsData))
  // }
  console.log("From List",questions)

  const questionsList = questions.map((question) => (
    <li key={question.prompt}>
      {question.prompt}</li>
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsList}
          /* display QuestionItem components here after fetching */ //questionsList
          
        
      </ul>
    </section>
  );
}

export default QuestionList;
