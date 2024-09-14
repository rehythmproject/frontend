import Header from './components/Header';
import Main from './components/Main';
import Side from './components/Side'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app_compo_container'>
        <Main/>
        <Side/>
      </div>
    </div>
  );
}

export default App;
