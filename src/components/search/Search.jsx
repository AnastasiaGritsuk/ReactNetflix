import * as React from "react";
import * as style from '../../styles/main.css';

export class Search extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <h4 className={style.textRed}>netflixroulette</h4>
                {this.props.children}
            </div>
        );
    }
}