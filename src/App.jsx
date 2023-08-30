import { NavLink } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <h1>Home Page</h1>
      <ul>
        <li><NavLink to="/presentation"> Presentations</NavLink></li>
      </ul>
    </div>
  );
}

export default App;
