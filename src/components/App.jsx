import * as React from "react";
import * as style from '../styles/main.css';
import {Footer} from "./Footer";
import { connect } from 'react-redux'

export class App extends React.Component {
    render() {
        return (
            <div className="app" id={style.container}>
                {this.props.children}
                Hi from Nastya {this.props.films}
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        films: state.films
    }
}

export default connect(mapStateToProps)(App);