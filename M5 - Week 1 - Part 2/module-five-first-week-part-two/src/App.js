import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease';


function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <LatestRelease />
      <Footer />
    </div>
  );
}

export default App
