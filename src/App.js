import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import Message from './components/profile/message';
function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Navbar/>
      <div className='wraper-content'>
        <Profile name={'Elon Mask'}/>
        <Message/>
      </div>
    </div>
  );
}

export default App;