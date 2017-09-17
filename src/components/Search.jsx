import * as React from "react";
import * as s from '../styles/search.css';
import * as m from '../styles/main.css';

export class Search extends React.Component {
    render() {
        return <div className={s.searchWrapper}>
            <h4 className={m.textRed}>netflixroulette</h4>

            <form action="#" method="post" className={m.searchForm}>
                <h2 className={m.h2}>Find your movie</h2>
                <input type="text" className={s.searchFormInput} />

            </form>


        </div>
    }
}