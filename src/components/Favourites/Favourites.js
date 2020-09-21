import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'primereact/button'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Rating } from 'primereact/rating'
import { clearFavourites, removeItemFromFavourites } from '../store/actions/favouritesActions'
import './Favourites.sass'
import { Link } from 'react-router-dom'

const Favourites = () => {

    const dispatch = useDispatch()
    const favouriteItems = useSelector(({ favouriteReducer }) => favouriteReducer.favouriteItems)

    const onItemRemove = id => {
        dispatch(removeItemFromFavourites(id))
    }

    const onClearFavourites = () => {
        dispatch(clearFavourites())
    }

    const ratingBodyTemplate = rowData => <Rating value={rowData.rating} readonly cancel={false}/>
    const priceBodyTemplate = rowData => (`${rowData.price} ₽`)
    const actionBodyTemplate = rowData => <Button icon="pi pi-trash" className="p-button-rounded p-button-danger"
                                                  onClick={() => onItemRemove(rowData.id)}/>

    return (
        <section className="favourites">
            <div className="p-grid">
                <div className="p-col-12">
                    {
                        favouriteItems.length !== 0 ?
                            <>
                                <div className="cart__header p-d-flex p-justify-between">
                                    <h2>Избранное</h2>
                                    <Button label="Очистить избранное" icon="pi pi-times"
                                            className="p-button-text p-button-danger"
                                            onClick={onClearFavourites}/>
                                </div>
                                <DataTable value={favouriteItems}>
                                    <Column field="name" header="Наименование" style={{ width: '40%' }}/>
                                    <Column field="rating" header="Рейтинг" body={ratingBodyTemplate}
                                            style={{ width: '15%' }}/>
                                    <Column field="price" header="Цена" body={priceBodyTemplate}
                                            style={{ width: '15%' }}/>
                                    <Column body={actionBodyTemplate} style={{ width: '10%' }}/>
                                </DataTable>
                            </>
                            :
                            <div className="cart__empty p-text-center">
                                <h2>Нет избранных товаров</h2>
                                <div><Link to="/">На главную</Link></div>
                            </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Favourites