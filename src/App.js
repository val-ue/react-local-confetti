import Confetti from "react-confetti";
import './App.css';

function App() {
  return (
    <div className="App"> 
      <Confetti    
      width={window.innerWidth}
      height={window.innerHeight}
      friction={0.95}/>
      
      <h1>Cool! I'm working with React on my computer!</h1>
      <p>Is this what happiness feels like?</p>
    </div>
  );
}

export default App;
