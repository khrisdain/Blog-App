import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails'
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        {/*All routes go into the switch component*/}
          <Switch>
            <Route exact path= "/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            {/* Matches non exiting rout and returns the custom hook message */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
