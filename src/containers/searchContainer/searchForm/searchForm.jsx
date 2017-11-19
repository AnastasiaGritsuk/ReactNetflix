import React from 'react';
import Search from '../../../components/search/Search'
import { SearchFormComponent } from '../../../components/search/SearchForm'

export default class SearchForm extends React.Component {
    constructor (props) {
        super(props);

        this.search = this.search.bind(this);
    }

    search () {
        this.props.search(this.query.value);
    }

    render () {
        return (
            <div className="search-bar">
                <Search />
                <SearchFormComponent
                    onClick={this.search}
                    defaultValue={this.props.query}/>
                <div className="movie-search-container">
                    <div className="title">find your movie</div>
                    <input type="text" defaultValue={this.props.query} ref={(input) => this.query = input}/>
                    <div className="search-by">
                        <div className="title">search by</div>


                    </div>
                </div>
            </div>
        )
    }
}