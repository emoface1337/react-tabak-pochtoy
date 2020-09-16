import React from 'react'
import { Button } from 'primereact/button'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../store/actions/cartActions'

const ContentItem = ({ item }) => {

    const dispatch = useDispatch()
    const { id, name, imageUrl, description, price, rating } = item

    const onAddItemClick = item => {
        dispatch(addItemToCart(item))
    }

    return (
        <div className="p-col-4">
            <div className="item__card p-card">
                <div className="item__card-image"><img src={imageUrl} alt={name}/></div>
                <div className="item__card-title">{name}</div>
                <div className="item__card-description">{description}</div>
                <div className="item__card-price">{price} ₽</div>
                <div className="item__card-add"><Button label="В корзину"
                                                        onClick={() => onAddItemClick({
                                                            id,
                                                            imageUrl,
                                                            name,
                                                            price,
                                                            quantity: 1,
                                                            rating
                                                        })}/></div>
            </div>
        </div>
    )
}

export default ContentItem