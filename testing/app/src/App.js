import co18 from './co18.png';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Report from './Report';
import StudentDetails from './StudentDetails';
import BookVaccinationDrive from './BookVaccinationDrive';
import axios from 'axios'

function App() {
  return (
    <Router>
    <div className="App">
       <div className='Navigation'>
        <img className='logo' src={co18} />
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/studentdetails">
          <StudentDetails />
        </Route>
        <Route exact path="/reports">
          <Report />
        </Route>
        <Route exact path="/managedrive">
          <BookVaccinationDrive />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
