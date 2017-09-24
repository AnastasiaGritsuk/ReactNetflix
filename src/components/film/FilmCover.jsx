import * as React from "react";
import * as style from '../../styles/main.css';

export class Film extends React.Component {
    render() {
        return (
            <div className={style.filmWrapper}>
                <img src="" alt=""/>
                <div className={style.filmCover}>
                    <h4>Title</h4>
                    <p className={style.filmCoverSupHeader}></p>
                    <div className={style.filmCoverRatingIcon}></div>
                    <div>
                        <span>1994</span>
                        <span>154 min</span>
                    </div>
                    <p className={style.filmCoverDesc}>bla bla bla</p>
                    <p>director</p>
                    <p>cast list</p>
                </div>
            </div>
        );
    }
}