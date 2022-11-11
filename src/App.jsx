import React from "react";
import "./App.css";
import JobList from "./components/JobList/JobList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailedJob from "./components/DetailedJob/DetailedJob";
import JobListProvider, {JobListContext} from "./context/jobListContext";

function App() {

  return (
    <BrowserRouter>
      <JobListProvider>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/:id" element={<DetailedJob />}/>
        </Routes>
      </JobListProvider>
    </BrowserRouter>
  );
}

export default App;
