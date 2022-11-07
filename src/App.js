import React from "react";
import "./App.css";
import JobList from "./components/JobList/JobList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetails from "./components/JobDetails/JobDetails";
import JobListProvider from "./context/jobListContext";

function App() {
  return (
      <BrowserRouter>
          <JobListProvider>
            <Routes>
              <Route path="/" element={<JobList />} />
              <Route path="/:id" element={<JobDetails />} />
            </Routes>
          </JobListProvider>
      </BrowserRouter>
  );
}

export default App;
