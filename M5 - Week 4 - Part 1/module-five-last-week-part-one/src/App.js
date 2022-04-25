import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import { useState } from 'react';


function App () {
  // state = {
  //   search: "",
  // }

  // searchNavBarInput = (newValue) => {
  //   this.setState({
  //     search: newValue,
  //   })
  // }

  // I changed this component, before it was a class component and now I am updating it for a function component.

  const [search, setSearch] = useState("")

  return (
    <div>
    <NavBar search={search} setSearch={setSearch}/>
    <MyBadge title="Welcome to the BookStore" color="danger"/>
    <BookList search={search}/>
    </div>
  )
}

export default App;
