import React from "react";
import Article from './Article'
import Header from './Header'
import TestComponent from './TestComponent'; // Import TestComponent


function App() {
  return <div className="App">
    <h1>Now</h1> {/* Added <h1> with content 'Now' */}
    learn react!
    <Header/>
    <Article />
    <TestComponent /> {/* Add the new component here */}
  </div>;
}

export default App;

