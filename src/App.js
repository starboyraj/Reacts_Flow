import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <>
      <Navbar />
           <Card title="React" desc="Learning React step by step" />
           <Card title="JavaScript" desc="Core language for frontend" />
      <Footer />
    </>
  );
}

export default App;
