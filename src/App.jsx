import React from 'react';
import ReactDom from 'react-dom';
import {Search} from "./components/search/Search";
import {Results} from "./components/results/Results";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {EmptyResultsBody} from "./components/results/EmptyResultsBody";
import {SearchForm} from "./components/search/SearchForm";
import {FilmCover} from "./components/film/FilmCover";
import {ResultsBody} from "./components/results/ResultsBody";
import App from "./components/App";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { appState } from './reducers/index'

const store = createStore(appState);

ReactDom.render((
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/">
                        <div>
                            <Search>
                                <Switch>
                                    <Route path="/film/:title" component={FilmCover} />
                                    <Route path="/" component={SearchForm} />
                                </Switch>
                            </Search>
                            <Results>
                                <Switch>
                                    <Route exact path="/" component={EmptyResultsBody} />
                                    <Route path="/search/:searchQuery?" component={ResultsBody} />
                                    <Route path="/film/:title" component={ResultsBody} />
                                </Switch>
                            </Results>
                        </div>
                    </Route>
                </Switch>
            </App>
        </Router>
    </Provider>
),document.getElementById("root"));