import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Destination from './Pages/Destination/Destination';
import Crew from './Pages/Crew/Crew';
import Technology from './Pages/Technology/Technology';
import {Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
          <Route exact path={process.env.PUBLIC_URL + '/'} component={() => <Homepage/>}/>
          <Route path={process.env.PUBLIC_URL + '/Destination'} component={() => <Destination/>}/>
          <Route path={process.env.PUBLIC_URL + '/Crew'} component={() => <Crew/>}/>
          <Route path={process.env.PUBLIC_URL + '/Technology'} component={() => <Technology/>}/>


  
    </div>
  );
}

export default App;
