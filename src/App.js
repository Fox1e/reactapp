import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Maths from './components/Maths';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Ilja"/>
        <Hello name="Juhan" age={20}/>
        <Maths></Maths>
      </header>
    </div>
  );
}

export default App;
