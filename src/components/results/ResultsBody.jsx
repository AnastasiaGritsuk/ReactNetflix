import * as React from "react";
import {FilmItem} from "../film/FilmItem";

export class ResultsBody extends React.Component {
    const films = this.props.films.map((film) =>
        <FilmItem
            key={film.id}
            film={film}
            history={this.props.history}
        />
    );
    
    render() {
        return (
            <div>{films}</div>
        );
    }
}