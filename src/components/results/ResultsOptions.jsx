import * as React from "react";
import * as style from '../../styles/main.css';

export class ResultsOptions extends React.Component {
    render() {
        return <div className={style.resultsOptionsWrapper}>
            <div className={style.resultsOptions}>
                <div>
                    <span id="resultsCount">7</span>
                    <span> movies found</span>
                </div>
                <div className={style.resultsFilter}>
                    <span className={[style.textBold, style.resultsFilterText].join(' ')}>Sort by</span>
                    <button type="button" className={style.btnFilter}>release date</button>
                    <button type="button" className={[style.btnFilter, style.btnFilterPrimary].join(' ')}>rating</button>
                </div>
            </div>
        </div>
    }
}