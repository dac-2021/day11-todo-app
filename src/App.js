import "./App.css";
import { Route, useLocation, useHistory } from "react-router-dom";

function App() {
  let location = useLocation();
  console.log(location);

  return (
    <>
      <Route exact to="/" component={Page1} />
      <Route exact to="/page1" component={Page1} />

      <Route exact to="/page2" component={Page2} />
      <Route exact to="/page3" component={Page3} />
    </>
  );
}

function Page1() {
  return <div>Page1</div>;
}

function Page2() {
  return <div>Page2</div>;
}

function Page3() {
  const history = useHistory();

  return (
    <div>
      Page3
      <div>
        <button onClick={() => history.push("/login")}>Go Login</button>
      </div>
    </div>
  );
}

export default App;
