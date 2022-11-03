import "./App.css";
import JobList from "./components/JobList/JobList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailedJob from "./components/DetailedJob/DetailedJob";
import {useState} from "react";

function App() {
    const [saveFlag,setSaveFlag]=useState(true)
    const saveIconObj={toggleFlag,saveFlag,setSaveFlag}

    function toggleFlag(e){
        setSaveFlag(!saveFlag)
    }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList saveIconObj={saveIconObj} />}/>
        <Route path="/detailedJob" element={<DetailedJob saveIconObj={saveIconObj} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
