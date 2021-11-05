import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import AppointmentPage from "./Pages/AppointmentPage/AppointmentPage/AppointmentPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/appointment">
            <AppointmentPage></AppointmentPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
