import React from 'react';
import {Link} from "react-router-dom";
import IconStore from "../../images/iconStore";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link className="header__logo logo" to={"/"}>
                        <img className="logo__img" src={IconStore.LogoImg} alt="logo" width="98" height="27"/>
                    </Link>
                    <h1 className="header__text">
                        Лучшее пиво со всего мира!
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;