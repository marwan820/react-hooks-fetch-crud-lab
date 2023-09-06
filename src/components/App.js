import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);


console.log(questions);

useEffect(() => {
  fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((questionsData) => setQuestions(questionsData));
}, []);

const handleAddQuestion = (newQuestion) => {
  setQuestions([...questions, newQuestion])}
  //const removeQuestion = (questionToBeDeleted) => {
  //  const updatedQuestion = questions.filter((questionItem) => { questionItem.id !== questionToBeDeleted.id})
  //  setQuestions(updatedQuestion)}

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          // onRemoveQuestion={removeQuestion}
          questions={questions}
        />
      )}
    </main>
  );
};

export default App;
