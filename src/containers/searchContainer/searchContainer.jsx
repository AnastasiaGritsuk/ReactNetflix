import * as React from "react";
import { App } from '../../components/App'
import {SORTS, SOURCES, SEARCH_URL} from './searchData/consts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from './searchData/searchActions'
import  SearchForm from './searchForm/searchForm'

class SearchContainer extends React.Component {
    constructor (props) {
        super(props);
        this.changeSort = this.changeSort.bind(this);
        this.changeSource = this.changeSource.bind(this);
        this.changeQuery = this.changeQuery.bind(this);
    }

    componentWillMount () {
        const query = this.props.match.params.searchQuery || '';
        console.log("params.searchQuery " + query);
        this.changeQuery(query);
    }

    changeSort (sortValue) {
        this.props.pageActions.changeSort(sortValue);
        this.props.pageActions.sort(this.props.page.films, sortValue);
    }

    changeSource (sourceValue) {
        this.props.pageActions.changeSource(sourceValue);
    }

    changeQuery (query) {
        console.log("changeQuery" + query);
        this.props.pageActions.searchFilms(query, this.props.page.sortBy);

        const searchUrl = `${SEARCH_URL}${query}`;
        this.props.history.push(searchUrl);
    }

    render() {
        return (
            <App>
                <SearchForm
                    search={this.changeQuery}
                    query={this.props.page.query}
                />
            </App>
        );
    }
}

function mapStateToProps (state) {
    console.log("mapStateToProps");
    return {
        page: state.searchContainer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);