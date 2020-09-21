import React, { memo } from 'react'
import { InputText } from 'primereact/inputtext'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = memo(() => {

    const totalCartCount = useSelector(({ cartReducer }) => cartReducer.totalCartCount)
    const totalFavCount = useSelector(({ favouriteReducer }) => favouriteReducer.totalFavCount)

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
                <div className="p-col-1 p-d-flex p-justify-between">
                    <Link to="/favourites">
                        <span className="p-overlay-badge">
                                <i className="pi pi-heart" style={{ color: 'black', fontSize: '2em' }}/>
                                <span className="p-badge">{totalFavCount}</span>
                        </span>
                    </Link>
                    <Link to="/cart">
                        <span className="p-overlay-badge">
                                <i className="pi pi-shopping-cart" style={{ color: 'black', fontSize: '2em' }}/>
                                <span className="p-badge">{totalCartCount}</span>
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
})

export default Header