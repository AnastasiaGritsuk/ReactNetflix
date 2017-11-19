import * as React from "react";
import { App } from '../../components/App'
import {SORTS, SOURCES, SEARCH_URL} from './searchData/consts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from './searchData/searchActions'

class SearchContainer extends React.Component {
    constructor (props) {
        super(props);
        this.changeSort = this.changeSort.bind(this);
        this.changeSource = this.changeSource.bind(this);
        this.changeQuery = this.changeQuery.bind(this);
    }

    componentWillMount () {
        const query = this.props.match.params.searchQuery || '';
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
        this.props.pageActions.searchFilms(query, this.props.page.sortBy);

        const searchUrl = `${SEARCH_URL}${query}`;
        this.props.history.push(searchUrl);
    }

    render() {
        return (
            <App>
            </App>
        );
    }
}

function mapStateToProps (state) {
    return {
        page: state.searchContainer
    }
}

function mapDispatchToProps(dispatch) {
    console.dir(pageActions);
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);