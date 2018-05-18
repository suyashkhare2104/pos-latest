import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home} from './scenes/home';
import {Login} from './scenes/login';
import {POS} from './scenes/POS';
import {ManageItems} from './scenes/manageItems';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
   render() {
      return (
         <Router>

               <Switch>
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/' component={Home} />
                  <Route exact path='/POS' component={POS} />
                  <Route exact path='/manageitems' component={ManageItems} />
               </Switch>

         </Router>
      );
   }
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
