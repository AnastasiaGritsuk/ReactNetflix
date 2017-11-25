import * as React from "react";
import * as style from '../../styles/main.css';
<<<<<<< HEAD
=======
import {SearchHeader} from "./SearchHeader";
import {SearchForm} from "./SearchForm";
import {FilmCover} from "../film/FilmCover";
>>>>>>> 26b824da0a2c1a42b9071ac752e8a4b0bc6bc916

export default class Search extends React.Component {
    render() {
<<<<<<< HEAD
        return (
            <div className={style.wrapper}>
                <h4 className={style.textRed}>netflixroulette</h4>
                {this.props.children}
            </div>
        );
=======
        return <div className={style.wrapper}>
            <SearchHeader/>
            <SearchForm/>
            /*<FilmCover/>*/
        </div>
>>>>>>> 26b824da0a2c1a42b9071ac752e8a4b0bc6bc916
    }
}