import Home from "./pages/Home";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// import DashBoard from './components/DashBoard'
// import * as ROUTES from './Routes'
// import NewPatient from './components/Forms/NewPatient';
import CssBaseline from "@material-ui/core/CssBaseline";
import useAuth from "./hooks/useAuth";
import Toast from "toastr";

Toast.options = {
  closeButton: false,
  debug: true,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
}; 

function App() {
  const { adminAuth } = useAuth();
  console.log(adminAuth);

  return (
    <Router>
      {/* <CssBaseline /> */}
      <Switch>
        <Redirect exact from="/home" to="/" />
        <Route
          exact
          path="/:page?"
          component={(props) =>
            adminAuth ? <Home {...props} /> : <Login {...props} />
          }
        />
        {/* <Route exact path="/dashboard" component={<DashBoard /> } /> */}
        {/* <Route exact path={ROUTES.ADDNEWPATIENT} component={<NewPatient /> } /> */}
      </Switch>
    </Router>
  );
}

export default App;
