import './App.css';
import MainWeather from './MainWeather';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MainWeather defaultCity="Barcelona"/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
