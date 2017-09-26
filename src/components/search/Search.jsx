import * as React from "react";
import * as style from '../../styles/main.css';
import {SearchHeader} from "./SearchHeader";
import {SearchForm} from "./SearchForm";
import {Results} from "../results/Results";

export class Search extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                {this.props.children}
            </div>
        );
    }
}