import * as React from "react";
import * as style from '../styles/main.css';
import {Footer} from "./Footer";

export class App extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className="app" id={style.container}>
                {this.props.children}
                Hi from Nastya
                <Footer/>
            </div>
        );
    }
}