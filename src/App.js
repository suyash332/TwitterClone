import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widgets from "./Widgets";
import {PostProvider, postProvider} from './context'
function App() {
  return (
    <PostProvider>
    <div className="app">
    

      {/*Sidebar*/}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Weights*/}
      <Widgets />
      
     
    </div>
    </PostProvider>
  );
}

export default App;
