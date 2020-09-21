import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.sass'

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Cart from './components/Cart/Cart'
import ContentItem from './components/ContentItem/ContentItem'
import Favourites from './components/Favourites/Favourites'


const App = () => {
    return (
        <main role="main" className="container">
            <Header/>
            <Switch>
                <Route path="/" exact component={Content}/>
                <Route path="/cart" exact component={Cart}/>
                <Route path="/tobacco/:id"  component={ContentItem}/>
                <Route path="/favourites"  component={Favourites}/>
            </Switch>
        </main>
    )
}

export default App
