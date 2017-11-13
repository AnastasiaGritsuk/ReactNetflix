import * as React from "react";
import * as style from '../../styles/main.css';
import Page from '../../components/App'
import SearchForm from '../../components/search/SearchForm'
import ResuultsOptions from '../../components/results/ResuultsOptions'
import ResuultsBody from '../../components/results/ResuultsOptions'

export class Item extends React.Component {
    render() {
        return (
            <Page>
                <SearchForm
                    sources={SOURCES}
                    changeSource={this.changeSource}
                    selectedValue={this.props.page.source}
                    search={this.changeQuery}
                    query={this.props.page.query}
                />
                <ResuultsOptions
                    moviesAmount={this.props.page.movies.length}
                    selectedValue={this.props.page.sortBy}
                    options={SORTS}
                    changeSort={this.changeSort}
                />
                <ResuultsBody
                    movies={this.props.page.movies}
                    history={this.props.history}
                />
            </Page>
        );
    }
}