import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import { Component } from 'react';


class App extends Component {
  state = {
    search: "",
  }

  searchNavBarInput = (newValue) => {
    this.setState({
      search: newValue,
    })
  }


  render() {
  return (
    <div>
    <NavBar search={this.state.search} searchNavBarInput={this.searchNavBarInput}/>
    <MyBadge title="Welcome to the BookStore" color="danger"/>
    <BookList search={this.state.search}/>
    </div>
  )
  }
}

export default App;
