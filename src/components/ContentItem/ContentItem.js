import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import './ContentItem.sass'
import { Rating } from 'primereact/rating'
import { Button } from 'primereact/button'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../store/actions/cartActions'
import { addItemToFavourites } from '../store/actions/favouritesActions'

const ContentItem = () => {

    const { id } = useParams()
    const [item, setCurrentItem] = useState({})

    useEffect(() => {
        axios.get(`/tobacco/${id}`)
            .then(({ data }) => setCurrentItem(data))
    }, [id])

    const dispatch = useDispatch()

    const onAddItemClick = item => {
        dispatch(addItemToCart(item))
    }

    const onAddToFavClick = item => {
        dispatch(addItemToFavourites(item))
    }

    return (
        <section className="content__item">
            <div className="p-grid">
                <div className="p-col-4">
                    <div className="item__image"><img src={item.imageUrl} alt=""/></div>
                </div>
                <div className="p-col-8">
                    <div className="item__info">
                        <h1 className="item__info-title">{item.name}</h1>
                        <div className="item__subtitle">
                            <Rating value={item.rating} readonly cancel={false}/>
                            <div className="item__subtitle-brand">Бренд: {item.brand}</div>
                        </div>
                        <div className="item__description">
                            {item.description}
                        </div>
                        <span className="p-buttonset">
                            <Button label="В избранное" className="p-button-success"
                                    onClick={() => onAddToFavClick(item)}/>
                            <Button label="В корзину" onClick={() => onAddItemClick(item)}/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentItem