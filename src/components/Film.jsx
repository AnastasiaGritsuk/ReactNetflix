import * as React from "react";
import * as m from '../styles/main.css';

export class Film extends React.Component {
    render() {
        return <div className={m.filmWrapper}>
            <img src="" alt=""/>
            <div className={m.filmCover}>
                <h4>Title</h4>
                <p className={m.filmCoverSupHeader}></p>
                <div className={m.filmCoverRatingIcon}></div>
                <div>
                    <span>1994</span>
                    <span>154 min</span>
                </div>
                <p className={m.filmCoverDesc}>bla bla bla</p>
                <p>director</p>
                <p>cast list</p>
            </div>
        </div>
    }
}