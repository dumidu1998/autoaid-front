import './App.css';
import Header from './components/Header';
import Header_Grid from './components/Header_Grid';
import LandingSection2 from './components/LandingSection2';
import LandingSection3 from './components/LandingSection3';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
    <NavBar/>
      <Header/>
      <LandingSection2/>
      <LandingSection3/>
    </div>
  );
}

export default App;
