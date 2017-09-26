import * as React from "react";
import {ResultsOptions} from "./ResultsOptions";

export class Results extends React.Component {
    render() {
        return (
            <div className="results">
                <ResultsOptions/>

                {this.props.children}
            </div>
        );
    }
}