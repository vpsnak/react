import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Image extends React.Component {
    render() {
        return (
            <img className={this.props.class} src={this.props.src} alt={this.props.alt} />
        );
    }
}

class Button extends React.Component {
    render() {
        if (this.props.text) {
            return (
                <button className={this.props.class}>{this.props.text}</button>
            );
        } else {
            return (
                <pre>Button text attribute is null</pre>
            );
        }
    }
}

class BgImage extends React.Component {
    render() {
        return (
            <div className={this.props.class} style={this.props.style}>
            </div>
        );
    }
}

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
