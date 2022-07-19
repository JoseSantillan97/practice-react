import './App.css';
import {Routes, Route} from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage'

function App() {
  return (
    <div className="container my-3">
      <h1>Breaking Bad Wiki</h1>
      <hr></hr>
      <Routes>
        <Route path="/" element={ <MainPage /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
