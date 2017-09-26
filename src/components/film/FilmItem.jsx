import * as React from "react";
import * as style from '../../styles/main.css';
import { Link } from 'react-router-dom';

export class Item extends React.Component {
    render() {
        return (
            <div className={style.item}>
                <img src="" className={style.itemImg} alt=""/>
                <div className={style.itemCaptionWrap}>
                    <div className={style.itemCaption}>
                        <a className={style.itemTitle}>
                            <Link to="/film">Kill Bill</Link>
                        </a>
                        <span className={style.itemTitleYear}>2012</span>
                    </div>
                    <p className={style.textNote}>Dramas</p>
                </div>
            </div>
        );
    }
}