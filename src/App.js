import './App.css';
import Details from './components/Details';
import Education from './components/Education';
import Employment from './components/Employment';
import Header from './components/Header';
import Membership from './components/Membership';
import Profile from './components/Profile';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header></Header>

      {/* Personal Details  */}
      <Details></Details>

      {/* Profile  */}
      <Profile></Profile>

      {/* Employment  */}
      <Employment></Employment>

      {/* Education  */}
      <Education></Education>

      {/* Education  */}
      <Membership></Membership>

      {/* Skill */}
      <Skill></Skill>

    </div>
  );
}

export default App;
