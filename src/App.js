import './App.css';
import MyHeading from './components/MyHeading';
import SmallHead from './components/SmallHead';
import StudentCred from './components/StudentCred';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyHeading />
        <SmallHead/>
        <StudentCred name = "Nishita Sachdev" studentID = "101450921" />
      </header>
    </div>
  );
}

export default App;
