import './App.css';
import Header from './components/Organs/Header';
import Header_Grid from './components/Moleculars/Header_Grid';
import LandingSection2 from './components/Organs/LandingSection2';
import LandingSection3 from './components/Organs/LandingSection3';
import LandingSection4 from './components/Organs/LandingSection4';
import NavBar from './components/Moleculars/NavBar';
import LandingSection5 from './components/Organs/LandingSection5';
import LandingSection6 from './components/Organs/LandingSection6';
import CallContainer from './components/Atoms/CallContainer';

function App() {
  return (
    <div>
    <NavBar/>
      <Header/>
      <LandingSection2/>
      <LandingSection3/>
      <LandingSection4/>
      <LandingSection5/>
      <LandingSection6/>
      <CallContainer />
      <CallContainer />
    </div>
  );
}

export default App;
