import "./App.css";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import SlideNav from "./components/SlideNav/SlideNav";
import Dashboard from "./Pages/Dashboard/Dashboard";
import StartMenuBar from "./components/DashboardComponent/StartMenuBar/StartMenuBar";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <Router>
      {/* <SlideNav></SlideNav>
      <StartMenuBar></StartMenuBar> */}
      <Switch>
        <Route exact path="/">
          {/* <Login></Login> */}
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/dashboard">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/orders">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Orders></Orders>
        </Route>
        <Route exact path="/product">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Products></Products>
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
