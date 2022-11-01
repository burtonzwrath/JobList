import "./App.css";
import JobList from "./components/JobList/JobList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailedJob from "./components/DetailedJob/DetailedJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />}/>
        <Route path="/detailedJob" element={<DetailedJob />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
