import { Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Presentation</h1>
      <p>Click on the links below to explore the slides:</p>
      <ul>
        <li><Link to="/">Introduction</Link></li>
        <li><Link to="/UnderstandingReact">Understanding React.js</Link></li>
        <li><Link to="/TheRoleOfRouting">The Role of Routing</Link></li>
        <li><Link to="/KeyRoutingConcepts">Key Routing Concepts</Link></li>
      </ul>
    </div>
  );
};

export default Home;
