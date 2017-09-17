import React from 'react';
import ReactDom from 'react-dom';
import s from './styles/main.css';

ReactDom.render(
    <div id="btn" className={s.btn}>Hello world</div>,
    document.getElementById("root")
);

console.log('4444');