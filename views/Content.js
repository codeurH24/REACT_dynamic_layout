var React = require('react');
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";
import { createMemoryHistory } from 'history';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    
    // this.state = props;
  }
  render() {
    const history = createMemoryHistory();

    // console.log('page client ', document )
    if (typeof document !== 'undefined' && document) {
      console.log('page client history ', history)
      console.log('page client location ', document.location.pathname)
      history.location.pathname = document.location.pathname
    }
    // console.log('page client ', history)
    return (
      <div className="container">hello world
      
        <Router history={history}>
          <Route path="/about">
            <h1>Page About</h1>
          </Route>
          <Route path="/users">
            <h1>Page Users</h1>
          </Route>
          <Route exact path="/">
            <h1>Page Index (home)</h1>
          </Route>
        </Router>

        {/* <BrowserRouter history={history}>
          {console.log('Router')}
          <Route path="/about">
            {console.log('page About')}
            <h1>Page About</h1>
          </Route>
          <Route path="/users">
            <h1>Page Users</h1>
          </Route>
          <Route exact path="/">
            <h1>Page Index (home)</h1>
          </Route>
        </BrowserRouter> */}



      </div>
    );
  }
}

module.exports = TodoApp;
