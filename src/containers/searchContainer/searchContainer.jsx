import * as React from "react";
import Page from '../../components/App'
import SearchForm from './SearchForm/SearchForm'
import SearchResultsOptions from './SearchResultsOptions/SearchResultsOptions'
import SearchResults from './SearchResults/SearchResults'
import * as pageActions from './searchData/searchActions'
import {SORTS, SOURCES, SEARCH_URL} from './searchData/consts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class SearchContainer extends React.Component {
    constructor (props) {
        super(props);
        this.changeQuery = this.changeQuery.bind(this);
    }

    componentWillMount () {
        const query = this.props.match.params.searchQuery || '';
        this.changeQuery(query);
    }

    changeQuery (query) {
        this.props.pageActions.searchFilms(query, this.props.page.sortBy);

        const searchUrl = `${SEARCH_URL}${query}`;
        this.props.history.push(searchUrl);
    }

    render() {
        return (
            <Page>
                <SearchForm
                    selectedValue={this.props.page.source}
                    query={this.props.page.query}
                />
                <SearchResultsOptions
                    
                />
                <SearchResults
                    films={this.props.page.films}
                    history={this.props.history}
                />
            </Page>
        );
    }
}

function mapStateToProps (state) {
    return {
        page: state.searchPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);