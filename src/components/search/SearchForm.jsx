import * as React from "react";
import * as style from '../../styles/main.css';

export class SearchForm extends React.Component {
    render() {
        return (
            <form action="#">
                <h2 className={style.h2}>Find your movie</h2>
                <input type="text" className={style.searchFormInput} />
                <div className={style.searchFormArrow}></div>
                <div className={style.searchFormActions}>
                    <div className={style.searchFormFilter}>
                        <span className={style.searchFormLabel}>Search by</span>
                        <button type="button" className={[style.btn, style.btnFilter].join(' ')}>Title</button>
                        <button type="button" className={[style.btn, style.btnFilter].join(' ')}>Director</button>
                    </div>
                    <button className={[style.btn, style.btnSearch, style.btnSearchPrimary].join(' ')}>Search</button>
                </div>
            </form>
        );
    }
}