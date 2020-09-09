import React from 'react'

import './App.sass'
import { InputText } from 'primereact/inputtext'
import { Checkbox } from 'primereact/checkbox'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'

function App() {
    return (
        <main role="main" className="container">
            <header className="header">
                <div className="p-grid p-align-center">
                    <div className="p-col-2"><a href="/" className="header__logo">Tabak-Pochtoy</a></div>
                    <div className="p-col-9">
                        <span className="p-input-icon-right header__search">
                            <i className="pi pi-search"/>
                            <InputText placeholder="Поиск" className="search__input"/>
                        </span>
                    </div>
                    <div className="p-col-1 p-text-right">
                        <a href="/cart">
                            <span className="p-overlay-badge">
                                <i className="pi pi-shopping-cart" style={{ color: 'white', fontSize: '2em' }}/>
                                <span className="p-badge">2</span>
                            </span>
                        </a>
                    </div>
                </div>
            </header>
            <section className="content">
                <div className="p-grid">
                    <div className="p-col-3">
                        <div className="filters">
                            <h4 className="filters__title">
                                Фильтр подбора
                            </h4>
                            <div className="filters__weight">
                                <h5 className="filters__title">Вес продукта (нетто)</h5>
                                <div className="p-field-checkbox">
                                    <Checkbox inputId="weight1" name="city" value="50" checked={false}/>
                                    <label htmlFor="weight1">50 грамм</label>
                                </div>
                                <div className="p-field-checkbox">
                                    <Checkbox inputId="weight2" name="city" value="100" checked={false}/>
                                    <label htmlFor="weight2">100 грамм</label>
                                </div>
                                <div className="p-field-checkbox">
                                    <Checkbox inputId="weight3" name="city" value="250" checked={false}/>
                                    <label htmlFor="weight3">250 грамм</label>
                                </div>
                            </div>
                            <div className="filters__name">
                                <h5 className="filters__title">Марка</h5>
                                <div className="p-field-checkbox">
                                    <Checkbox inputId="name1" name="city" value="Burn" checked={false}/>
                                    <label htmlFor="name1">Burn</label>
                                </div>
                                <div className="p-field-checkbox">
                                    <Checkbox inputId="name2" name="city" value="Al Fakher" checked={false}/>
                                    <label htmlFor="name2">Al Fakher</label>
                                </div>
                                <div className="p-field-checkbox">
                                    <Checkbox inputId="name3" name="city" value="Spectrum" checked={false}/>
                                    <label htmlFor="name3">Spectrum</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-col">
                        <div className="content__items">
                            <div className="p-grid">
                                <div className="p-col-4">
                                    <Card title="Табак Al Fakher - Two Apples (Двойное Яблоко, 50 грамм, Акциз)"
                                          style={{ width: '100%' }}
                                          className="ui-card-shadow items__card" header={<img alt="Card"
                                                                                              src='https://tabak-pochtoy.ru/wa-data/public/shop/products/22/61/16122/images/66210/66210.215.jpg'/>}
                                          footer={<span><Button label="В корзину"/></span>}>
                                        <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                            numquam deserunt</p>
                                    </Card>
                                </div>
                                <div className="p-col-4">
                                    <Card title="Табак Al Fakher - Two Apples (Двойное Яблоко, 50 грамм, Акциз)"
                                          style={{ width: '100%' }}
                                          className="ui-card-shadow items__card" header={<img alt="Card"
                                                                                              src='https://tabak-pochtoy.ru/wa-data/public/shop/products/22/61/16122/images/66210/66210.215.jpg'/>}
                                          footer={<span><Button label="В корзину"/></span>}>
                                        <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                            numquam deserunt</p>
                                    </Card>
                                </div>
                                <div className="p-col-4">
                                    <Card title="Табак Al Fakher - Two Apples (Двойное Яблоко, 50 грамм, Акциз)"
                                          style={{ width: '100%' }}
                                          className="ui-card-shadow items__card" header={<img alt="Card"
                                                                                              src='https://tabak-pochtoy.ru/wa-data/public/shop/products/22/61/16122/images/66210/66210.215.jpg'/>}
                                          footer={<span><Button label="В корзину"/></span>}>
                                        <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                            numquam deserunt</p>
                                    </Card>
                                </div>
                                <div className="p-col-4">
                                    <Card title="Табак Al Fakher - Two Apples (Двойное Яблоко, 50 грамм, Акциз)"
                                          style={{ width: '100%' }}
                                          className="ui-card-shadow items__card" header={<img alt="Card"
                                                                                              src='https://tabak-pochtoy.ru/wa-data/public/shop/products/22/61/16122/images/66210/66210.215.jpg'/>}
                                          footer={<span><Button label="В корзину"/></span>}>
                                        <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                            numquam deserunt</p>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default App
