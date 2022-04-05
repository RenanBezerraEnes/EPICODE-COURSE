import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import AnotherComponent from './AnotherComponent';

function App() {

  let name = 'Renan'

  return (
    <div className="App">
      <ClassComponent classTitle="Welcome to my first react app"/>
      <header className="App-header">
        <AnotherComponent title="Top Section!" subTitle="Welcome" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           From {name}
        </p>
        <AnotherComponent title="Bottom Section!" subTitle="GoodBye"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FunctionalComponent />
    </div>
  );
}

export default App;
