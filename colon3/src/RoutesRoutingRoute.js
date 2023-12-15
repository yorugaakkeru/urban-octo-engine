import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import {Home} from'./pages/index.js';
import {CareForCats} from './pages/CareForCats.js';
import {InfoAboutCats} from './pages/InfoAboutCats.js';

const RoutesRoutingRoute = () => {
    return(
        <Router>
          <Routes>
              <Route exact path="/" Component={Home}/>
              <Route  path="/InfoAboutCats" Component={InfoAboutCats}/>
              <Route  path="/CareForCats" Component={CareForCats}/>
              
            </Routes>
        </Router>
    );
}
export default RoutesRoutingRoute;