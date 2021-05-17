import Home from './pages/Home'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
// import DashBoard from './components/DashBoard'
// import * as ROUTES from './Routes'
// import NewPatient from './components/Forms/NewPatient';
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Redirect exact from="/home" to="/" />
        <Route exact path="/:page?" component={props => <Home {...props} /> } />
        {/* <Route exact path="/dashboard" component={<DashBoard /> } /> */}
        {/* <Route exact path={ROUTES.ADDNEWPATIENT} component={<NewPatient /> } /> */}
      </Switch>
    </Router>
  );
}

export default App;
