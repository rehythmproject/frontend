import Header from './components/Header';
import AvailableModel from './components/AvailableModel/AvailableModel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app_compo_container'>
        <AvailableModel />
      </div>
    </div>
  );
}

export default App;
