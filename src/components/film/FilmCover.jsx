import * as React from "react";
import * as style from '../../styles/main.css';

export class FilmCover extends React.Component {
    render() {
        return (
            <div className={style.filmWrapper}>
                <img src="" alt=""/>
                <div className={style.filmCover}>
                    <h4>Title {this.props.film.title}</h4>
                    <p className={style.filmCoverSupHeader} />
                    <div className={style.filmCoverRatingIcon}>Rating {this.props.film.rating}</div>
                    <div>
                        <span>1994 {this.props.film.releaseYear}</span>
                        <span>154 min {this.props.film.duration}</span>
                    </div>
                    <p className={style.filmCoverDesc}>bla bla bla {this.props.film.description}</p>
                    <p>director {this.props.film.director}</p>
                    <p>cast list</p>
                </div>
            </div>
        );
    }
}