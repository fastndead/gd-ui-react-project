import React from 'react';
import "./Newsletter.scss";
import icon from "./assets/Mail_Ico_.png"

class Newsletter extends React.Component {
    render() {
        return <div className="Newsletter">
            <div className="Newsletter__text">
                <h2 className="Newsletter__header">NEWS LETTER</h2>
                <p className="Newsletter__paragraph">
                    join us now to get all news and special offers
                </p>
            </div>
            <form className="Form Form_newsletter">
                <div className="Form__input-wrapper">
                    <img src={icon}
                         alt="icon of envelope" className="Form__icon"/>
                    <input className="Form__input" type="email" placeholder="type your email here"/>
                </div>
                <input type="submit" className="Form__button" value="join us"/>
            </form>
        </div>;
    }
}

export default Newsletter;