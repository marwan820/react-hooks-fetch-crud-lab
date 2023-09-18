import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);;
  console.log("Questions", questions);


  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then(questionsData => setQuestions([...questionsData]));
  }, [])
  


// Post
  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  // Delete
  const onDeleteQuestionClick = (questionToBeDeleted) => {
    const questionFilter = questions.filter((question) => {
      return question.id !== questionToBeDeleted.id;
    });
    setQuestions(questionFilter);
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion}  />
      ) : (
        <QuestionList
          questions={questions}
          handleDeleteClick={onDeleteQuestionClick}
        />
      )}
    </main>
  );
}

export default App;
