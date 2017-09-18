import * as React from "react";
import * as style from '../../styles/main.css';

export class Item extends React.Component {
    render() {
        return <div className={style.item}>
            <img src="" className={style.itemImg} alt=""/>
            <div className={style.itemCaptionWrap}>
                <div className={style.itemCaption}>
                    <h4 className={style.itemTitle}>Kill Bill</h4>
                    <span className={style.itemTitleYear}>2012</span>
                </div>
                <p className={style.textNote}>Dramas</p>
            </div>
        </div>
    }
}