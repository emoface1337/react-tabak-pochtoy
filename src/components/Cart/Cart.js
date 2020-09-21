import React, { memo } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Rating } from 'primereact/rating'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'primereact/button'
import { clearCart, decreaseItemCart, increaseItemCart, removeItemFromCart } from '../store/actions/cartActions'
import { Link } from 'react-router-dom'

import './Cart.sass'

const Cart = memo(() => {

    const { cartItems, totalCount, totalPrice } = useSelector(({ cartReducer }) => cartReducer)
    const dispatch = useDispatch()

    const onClearCart = () => {
        dispatch(clearCart())
    }

    const onItemRemove = id => {
        dispatch(removeItemFromCart(id))
    }

    const onIncreaseItem = (id, price) => {
        dispatch(increaseItemCart(id, price))
    }

    const onDecreaseItem = (id, price) => {
        dispatch(decreaseItemCart(id, price))
    }

    const ratingBodyTemplate = rowData => <Rating value={rowData.rating} readonly cancel={false}/>

    const quantityBodyTemplate = rowData => (
        <div className="p-d-flex p-align-center">
            <Button icon="pi pi-minus" className="p-button-rounded p-button-danger"
                    onClick={() => onDecreaseItem(rowData.id, rowData.price)}/>
            <div style={{ margin: '0 10px' }}>{rowData.quantity}</div>
            <Button icon="pi pi-plus" className="p-button-rounded p-button-success"
                    onClick={() => onIncreaseItem(rowData.id, rowData.price)}/>
        </div>
    )

    const priceBodyTemplate = rowData => (`${rowData.price} ₽`)

    const actionBodyTemplate = rowData => <Button icon="pi pi-trash" className="p-button-rounded p-button-danger"
                                                  onClick={() => onItemRemove(rowData.id)}/>

    return (
        <section className="cart">
            <div className="p-grid">
                <div className="p-col-12">
                    {
                        cartItems.length !== 0 ?
                            <>
                                <div className="cart__header p-d-flex p-justify-between">
                                    <h2>Корзина</h2>
                                    <Button label="Очистить корзину" icon="pi pi-times"
                                            className="p-button-text p-button-danger"
                                            onClick={onClearCart}/>
                                </div>
                                <DataTable value={cartItems}>
                                    <Column field="name" header="Наименование" style={{ width: '40%' }}/>
                                    <Column field="rating" header="Рейтинг" body={ratingBodyTemplate}
                                            style={{ width: '15%' }}/>
                                    <Column field="quantity" header="Количество" style={{ width: '15%' }}
                                            body={quantityBodyTemplate}/>
                                    <Column field="price" header="Цена" body={priceBodyTemplate}
                                            style={{ width: '15%' }}/>
                                    <Column body={actionBodyTemplate} style={{ width: '10%' }}/>
                                </DataTable>
                                <div className="cart__footer p-d-flex p-align-center p-justify-between">
                                    <div className="cart__footer-count">Всего: {totalCount} шт.</div>
                                    <div className="cart__footer-price">Всего: <span>{totalPrice} ₽</span></div>
                                </div>
                            </>
                            :
                            <div className="cart__empty p-text-center">
                                <h2>Корзина пуста</h2>
                                <div><Link to="/">На главную</Link></div>
                            </div>
                    }
                </div>
            </div>
        </section>
    )
})

export default Cart