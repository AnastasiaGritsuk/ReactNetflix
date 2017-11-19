import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from './store/store';
import SearchContainer  from './containers/searchContainer/searchContainer'
import DetailsPage  from './containers/detailsContainer/detailsContainer'

const store = configureStore({})

ReactDom.render((
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={SearchContainer} />
                <Route path="/search/:searchQuery?" component={SearchContainer} />
                <Route exact path="/film/:title" component={DetailsPage}
                />
            </Switch>
        </Router>
    </Provider>
),document.getElementById("root"));