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
            <section className="content">
                <div className="p-grid">
                    <Switch>
                        <Route path="/" exact component={Content}/>
                        <Route path="/cart" exact component={Cart}/>
                    </Switch>
                </div>
            </section>
        </main>
    )
}

export default App
