// import "./App.css";
import React, { useState } from "react";
import NavBar from "./componant/NavBar";
import News from "./componant/News";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
// import Switch from "@material-ui/core/Switch";
const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [Progress, setProgress] = useState(0);
  return (
    <>
      {/* <Switch> */}
      <div>
        <Router>
          <NavBar />
          <LoadingBar height={3} color="#f11946" Progress={Progress} />
          {/* <Switch> */}
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>

          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>

          <Route exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>

          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>

          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>

          <Route exact path="/Science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="Science"
              pageSize={pageSize}
              country="in"
              category="Science"
            />
          </Route>

          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>

          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Router>
      </div>
      {/* </Switch> */}
    </>
  );
};

export default App;
