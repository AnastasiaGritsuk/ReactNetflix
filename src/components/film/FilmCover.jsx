import * as React from "react";

export class FilmCover extends React.Component {
    render() {
        return (
            <div>
                <img src="" alt=""/>
                <div>
                    <h4>Title {this.props.film.title}</h4>
                    <p />
                    <div>Rating {this.props.film.rating}</div>
                    <div>
                        <span>1994 {this.props.film.releaseYear}</span>
                        <span>154 min {this.props.film.duration}</span>
                    </div>
                    <p>bla bla bla {this.props.film.description}</p>
                    <p>director {this.props.film.director}</p>
                    <p>cast list</p>
                </div>
            </div>
        );
    }
}