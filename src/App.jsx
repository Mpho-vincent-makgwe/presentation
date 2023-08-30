import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Nav';
import Presentation from './Components/Presentation';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route  element={<NavBar />} >
        <Route path="/" element={<Presentation/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
