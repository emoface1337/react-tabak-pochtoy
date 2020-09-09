import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="p-grid p-align-center">
                <div className="p-col-2">
                    <Link className="header__logo" to="/">Tabak-Pochtoy</Link>
                </div>
                <div className="p-col-9">
                        <span className="p-input-icon-right header__search">
                            <i className="pi pi-search"/>
                            <InputText placeholder="Поиск" className="search__input"/>
                        </span>
                </div>
                <div className="p-col-1 p-text-right">
                    <Link to="/cart">
                            <span className="p-overlay-badge">
                                <i className="pi pi-shopping-cart" style={{ color: 'white', fontSize: '2em' }}/>
                                <span className="p-badge">2</span>
                            </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header