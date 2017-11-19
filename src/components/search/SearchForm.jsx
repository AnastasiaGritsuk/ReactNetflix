import * as React from "react";
import * as style from '../../styles/main.css';
import { Link } from 'react-router-dom';

export class SearchFormComponent extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <form action="#">
                <h2 className={style.h2}>Find your movie</h2>
                <input type="text" className={style.searchFormInput} defaultValue={this.props.query}
                       ref={(input) => this.query = input}/>
                <div className={style.searchFormArrow}></div>
                <div className={style.searchFormActions}>
                    <div className={style.searchFormFilter}>
                        <span className={style.searchFormLabel}>Search by</span>
                        <button type="button" className={[style.btn, style.btnFilter].join(' ')}>Title</button>
                        <button type="button" className={[style.btn, style.btnFilter].join(' ')}>Director</button>
                    </div>
                    <button className={[style.btn, style.btnSearch, style.btnSearchPrimary].join(' ')} 
                    onClick={this.props.search}>
                        Search
                    </button>
                </div>
            </form>
        );
    }
}