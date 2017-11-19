import * as React from "react";
import {FilmItem} from "../../../components/film/FilmItem";

export class SearchResults extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div>{this.props.films.map((film) =>
                <FilmItem
                    key={film.id}
                    film={film}
                    history={this.props.history}
                />
                )}</div>
        );
    }
}