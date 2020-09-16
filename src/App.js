import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.sass'

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Cart from './components/Cart/Cart'


const App = () => {
    return (
        <main role="main" className="container">
            <Header/>
            <Switch>
                <Route path="/" exact component={Content}/>
                <Route path="/cart" exact component={Cart}/>
            </Switch>
        </main>
    )
}

export default App
