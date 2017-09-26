import React from 'react';
import ReactDom from 'react-dom';
import * as style from './styles/main.css';
import {Search} from "./components/search/Search";
import {Results} from "./components/results/Results";
import {Footer} from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {EmptyResultsBody} from "./components/results/EmptyResultsBody";
import {SearchHeader} from "./components/search/SearchHeader";
import {SearchForm} from "./components/search/SearchForm";
import {FilmCover} from "./components/film/FilmCover";
import {ResultsBody} from "./components/results/ResultsBody";

class App extends React.Component {
    render() {
       return (
           <div id={style.container}>

               {this.props.children}

               <Footer/>
           </div>
       );
    }
}

ReactDom.render((
    <Router>
        <App>
            <Switch>
                <Route path="/">
                    <div>
                        <Search>
                            <Switch>
                                <Route path="/film" component={FilmCover} />
                                <Route path="*" component={SearchForm} />
                            </Switch>
                        </Search>
                        <Results>
                            <Switch>
                                <Route exact path="/" component={EmptyResultsBody} />
                                <Route path="/search" component={ResultsBody} />
                                <Route path="/film" component={ResultsBody} />
                            </Switch>
                        </Results>
                    </div>
                </Route>
            </Switch>
        </App>
    </Router>
),document.getElementById("root"));