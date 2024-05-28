import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import Unifilar from './components/unifilar';
import Medidor from './components/medidor';
import Historico from './components/historico';
import Alarmes from './components/alarmes';
import './css/style.css';


const App = () => {
  return (
    <Router>
      <div>
      <Navigation /> 
      <Switch>                
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/unifilar" component={Unifilar} />
          <Route path="/medidor" component={Medidor} />
          <Route path="/historico" component={Historico} />
          <Route path="/alarmes" component={Alarmes} /> 
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;
