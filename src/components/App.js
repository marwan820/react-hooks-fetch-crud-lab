import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List")


const getQuestions = (questionsData) => {

  questionsData.map((questionElement) => <li key={questionElement.id}>{questionElement.prompt}</li>)



}





  
  
  useEffect(() => {
fetch(`http://localhost:4000/questions`)
.then(response => response.json())
.then(questionsData => getQuestions(questionsData))
})


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}


export default App;
