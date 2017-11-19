import * as React from "react";
import * as style from '../../styles/main.css';

export class FilmItem extends React.Component {
    render() {
        return (
            <div className={style.item}>
                <img src="" className={style.itemImg} alt=""/>
                <div className={style.itemCaptionWrap}>
                    <div className={style.itemCaption}>
                        <a className={style.itemTitle} onClick={this.props.goToFilm}>
                        </a>
                        <span className={style.itemTitleYear}>{this.props.film.releaseYear}</span>
                    </div>
                    <p className={style.textNote}>{this.props.film.genre}</p>
                </div>
            </div>
        );
    }
}