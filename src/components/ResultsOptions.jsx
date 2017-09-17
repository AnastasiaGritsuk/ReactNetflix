import * as React from "react";
import * as m from '../styles/main.css';

export class ResultsOptions extends React.Component {
    render() {
        return <div className={m.resultsOptionsWrapper}>
            <div className={m.resultsOptions}>
                <div>
                    <span id="resultsCount">7</span>
                    <span> movies found</span>
                </div>
                <div>
                    <span>Sort by </span>
                    <button type="button">release date</button>
                    <button type="button">rating</button>
                </div>
            </div>
        </div>
    }
}