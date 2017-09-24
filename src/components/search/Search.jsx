import * as React from "react";
import * as style from '../../styles/main.css';
import {SearchHeader} from "./SearchHeader";
import {SearchForm} from "./SearchForm";

export class Search extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <SearchHeader/>
                <SearchForm/>
            </div>
        );
    }
}