import "./App.css";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from "./Pages/Register/Register";
import SlideNav from "./components/SlideNav/SlideNav";
import Dashboard from "./Pages/Dashboard/Dashboard";
import StartMenuBar from "./components/DashboardComponent/StartMenuBar/StartMenuBar";
import Orders from "./Pages/Orders/Orders";

function App() {
  return (
    <Router>
      <SlideNav></SlideNav>
      <StartMenuBar></StartMenuBar>
      <Switch>
      <Route exact path="/">
          {/* <Login></Login> */}
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/orders">
          <Orders></Orders>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
