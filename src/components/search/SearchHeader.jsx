import * as React from "react";
import * as style from '../../styles/main.css';
import { Link } from 'react-router-dom';

export class SearchHeader extends React.Component {
    render() {
        return (

            <div className={style.searchHeader}>
                <h4 className={style.textRed}>netflixroulette</h4>
                <button className={[style.btn, style.btnSearch, style.btnSearchPrimary].join(' ')}>
                    <Link to="/search">Search</Link>
                </button>
            </div>
        );
    }
}