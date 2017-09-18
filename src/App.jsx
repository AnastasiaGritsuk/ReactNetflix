import React from 'react';
import ReactDom from 'react-dom';
import * as style from './styles/main.css';
import {Search} from "./components/Search";
import {Results} from "./components/Results";
import {Footer} from "./components/Footer";

class App extends React.Component {
    render() {
       return <div id={style.container}>
           <Search/>
           <Results/>
           <Footer/>
       </div>
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("root")
);