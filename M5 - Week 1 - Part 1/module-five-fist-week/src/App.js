
import './App.css';
import NavbarClass from './NavbarClass';
import AnotherComponent from './AnotherComponent';
import SearchBar from './SearchBar';
import Footer from './Footer';

function App() {

  let name = 'Renan'

  return (
    <div className="App">
      <NavbarClass/>
      <header className="App-header">
        <AnotherComponent title="WELCOME TO THE NFT MARKET" />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lNyuIbqCaBRJKopI7D9r67HVJ2B9h7uQK1O73DlZnMiNvgq6oRB5Zj_U9Y5-6pbfY80&usqp=CAU' 
        className="App-logo rounded-circle mt-3" 
        style={{height:"80px"}}
        alt="logo" 
        />
      <br></br>
      <SearchBar/>
        
      </header>
      
      <Footer />
    </div>
  );
}

export default App;
