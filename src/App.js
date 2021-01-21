import "./App.css";
import { Route, useLocation, useHistory } from "react-router-dom";

function App() {
  let location = useLocation();
  console.log(location);

  return (
    <>
      <Route exact path="/" component={Page1} />
      <Route path="/page1" component={Page1} />

      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
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
  return <div>Page3</div>;
}

export default App;
