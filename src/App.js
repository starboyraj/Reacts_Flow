import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import { useState } from "react";



function App() {
  const[count, setCount] = useState(0);
  return (
    <>
    

    <h1> Count : {count} </h1>
    <button onClick={() => setCount(count+1)}>Add </button>
      <Navbar />
           <Card title="React" desc="Learning React step by step" />
           <Card title="JavaScript" desc="Core language for frontend" />
      <Footer />


    </>
  );
}

export default App;
