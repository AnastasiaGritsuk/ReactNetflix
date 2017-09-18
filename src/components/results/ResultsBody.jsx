import * as React from "react";
import {Item} from "../film/FilmItem";

export class ResultsBody extends React.Component {
    render() {
        return <div>
            <ul>
                <Item/>
                <Item/>
            </ul>
        </div>
    }
}