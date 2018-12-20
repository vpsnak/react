import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Image = (props) => {
    return (
        <img className={props.class} src={props.src} alt={props.alt} />
    );
};

const Button = (props) => {
    if (props.text) {
        return (
            <button className={props.class}>{props.text}</button>
        );
    } else {
        return (
            <pre>Button text attribute is null</pre>
        );
    }
};

const BgImage = (props) => {
    return (
        <div className={props.class} style={props.style}>
        </div>
    );
};

ReactDOM.render(
    <div>
        <Image src={'https://www.bignerdranch.com/assets/img/blog/2017/07/react-logo.png'} alt={'react image'} />
        <Button class={'primary'} text={'Save'} />
        <BgImage class={'row'} style={{
            'background': 'url("https://udemy-images.udemy.com/course/750x422/1436092_2024.jpg") no-repeat',
            'height': '500px'
        }} />
    </div>,
    document.getElementById('root')
);
