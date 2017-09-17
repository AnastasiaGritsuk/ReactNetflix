import * as React from "react";
import * as m from '../styles/main.css';

export class Item extends React.Component {
    render() {
        return <div className={m.item}>
            <img src="" alt=""/>
            <div className={m.itemCaption}>
                <div>
                    <h4 className={m.itemTitle}>Kill Bill</h4>
                    <span>2012</span>
                </div>
                <p>Dramas</p>
            </div>
        </div>
    }
}