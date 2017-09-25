import React from 'react';
import ReactDom from 'react-dom';
import * as style from './styles/main.css';
import {Search} from "./components/search/Search";
import {Results} from "./components/results/Results";
import {Footer} from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {EmptyResultsBody} from "./components/results/EmptyResultsBody";

class App extends React.Component {
    render() {
       return (
           <div id={style.container}>
               <Search/>
               {this.props.children}
               <Results/>
               <Footer/>
           </div>
       );
    }
}
ReactDom.render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={EmptyResultsBody} />

            </Switch>
        </App>
    </Router>
),document.getElementById("root"));