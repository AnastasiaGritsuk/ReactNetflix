import * as React from "react";
import * as style from '../styles/main.css';

export class Item extends React.Component {
    render() {
        return <div className={style.item}>
            <img src="" className={style.itemImg} alt=""/>
            <div className={style.itemCaption}>
                <div>
                    <h4 className={style.itemTitle}>Kill Bill</h4>
                    <span>2012</span>
                </div>
                <p>Dramas</p>
            </div>
        </div>
    }
}