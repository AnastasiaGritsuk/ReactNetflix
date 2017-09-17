import React from 'react';
import ReactDom from 'react-dom';
import s from './styles/main.css';

const Footer = ()=> {
    return <div>footer</div>
};

const Results = ()=> {
    return <div className={s.btn}>results</div>
};

const Header = ()=> {
    return <div>header</div>
};

const App = ()=> {
  return <div>
      <Header/>
      <Results/>
      <Footer/>
    </div>
};

ReactDom.render(
    <App/>,
    document.getElementById("root")
);