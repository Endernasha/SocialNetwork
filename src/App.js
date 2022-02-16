import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;