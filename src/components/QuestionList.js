import React,{useEffect,useState} from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({questions,handleDeleteClick,}) {
  

 // const onDeleteQuestionClick = (questionToBeDeleted) => {
 //   const questionFilter = questions.filter((question) => {
 //     return question.id !== questionToBeDeleted.id;
 //   });
 //   setQuestions(questionFilter);
 // };

  

 

  

  
  const questionsList = questions.map((question) => {

    

    return (
      <QuestionItem
    
        handleDeleteClick={handleDeleteClick}
        key={question.id}
        question={question}
      />
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
