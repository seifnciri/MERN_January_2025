import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>Person Cards</h1>
      <div className="card-container">
        <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
        <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
        <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
        <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
      </div>
    </div>
  );
}

export default App;