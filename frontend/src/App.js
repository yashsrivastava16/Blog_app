import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  let { user } = useContext(Context);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup">{user ? <Home /> : <Signup />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
