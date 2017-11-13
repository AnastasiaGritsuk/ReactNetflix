import * as React from "react";
import * as style from '../../styles/main.css';
import Page from '../../components/App'
import SearchForm from './SearchForm/SearchForm'
import SearchResultsOptions from './SearchResultsOptions/SearchResultsOptions'
import SearchResults from './SearchResults/SearchResults'

export class Item extends React.Component {
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
                    films={this.props.page.movies}
                    history={this.props.history}
                />
            </Page>
        );
    }
}