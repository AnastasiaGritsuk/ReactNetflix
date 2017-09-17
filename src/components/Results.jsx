import * as React from "react";
import {ResultsOptions} from "./ResultsOptions";
import {ResultsBody} from "./ResultsBody";

export class Results extends React.Component {
    render() {
        return <div className="results">
            <ResultsOptions/>
            <ResultsBody/>
        </div>
    }
}