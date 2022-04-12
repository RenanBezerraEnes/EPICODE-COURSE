import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';


function App() {
  return (
    <div>
    <NavBar />
    <MyBadge title="Welcome to the BookStore" color="danger"/>
    <BookList />
    </div>
  )
}

export default App;
