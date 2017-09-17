import * as React from "react";
import * as s from '../styles/search.css';
import * as m from '../styles/main.css';

export class Search extends React.Component {
    render() {
        return <div className={m.wrapper}>
            <h4 className={m.textRed}>netflixroulette</h4>
            <form action="#">
                <h2 className={m.h2}>Find your movie</h2>
                <input type="text" className={s.searchFormInput} />
                <div className={s.searchFormArrow}></div>
                <div className={s.searchFormActions}>
                    <div className={s.searchFormFilter}>
                        <span className={s.searchFormLabel}>Search by</span>
                        <button type="button" className={[m.btn, m.btnFilter].join(' ')}>Title</button>
                        <button type="button" className={[m.btn, m.btnFilter].join(' ')}>Director</button>
                    </div>
                    <button className={[m.btn, m.btnSearch].join(' ')}>Search</button>
                </div>
            </form>
        </div>
    }
}