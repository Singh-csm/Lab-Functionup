import React from "react";

import {Route, Routes } from "react-router-dom";


import Navbar from './Component/Navbar/Navbar'
import Top from './Component/Nav bar top/Top'

import Home from "./Component/Pages/Home/Home";
import Profile from "./Component/Pages/Profile/Profile";
import Leaderboard from "./Component/Pages/LeaderBoard/Leaderboard";
import Projectmilestone from "./Component/Pages/Milestone/Projectmilestone";
import Leaves from './Component/Pages/Leaves/Leaves' ;
import Project from "./Component/Pages/Project/Project";
import Submission from "./Component/Left Component/Submission/Submission";
import Notes from "./Component/Pages/Notes/Notes_Main/Notes";


function App() {

  return (
    <>
      <Top />
      <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>}/> 
          <Route  path="/profile" element={<Profile />}/> 
          <Route  path="/submission" element={<Submission/>}/> 
          <Route  path="/leaderboard" element={<Leaderboard/>}/> 
          <Route  path="/extra-milestone" element={<Projectmilestone/>}/> 
          <Route  path="/notes" element={<Notes/>}/> 
          <Route  path="/leaves" element={<Leaves/>}/> 
          <Route  path="/project-evaluation" element={<Project/>}/> 
        </Routes>

    </>
  );
}


export default App;
