import './App.css';
import Card from './components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function App() {

  return (
    <div className="App">
      <h1 id="title">Github <FontAwesomeIcon icon={faGithub} /> Finder</h1>
      <Card />
    </div>
  );
}

export default App;
