import React from 'react'
import { Button } from 'primereact/button'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../store/actions/cartActions'
import { Link } from 'react-router-dom'

const ContentItemCard = ({ item }) => {

    const dispatch = useDispatch()
    const { name, imageUrl, description, price } = item

    const onAddItemClick = (event, item) => {
        event.preventDefault()
        dispatch(addItemToCart(item))
    }

    return (
        <div className="p-col-4">
            <Link to={`/tobacco/${item.id}`}>
                <div className="item__card p-card">
                    <div className="item__card-image"><img src={imageUrl} alt={name}/></div>
                    <div className="item__card-title">{name}</div>
                    <div className="item__card-description">{description}</div>
                    <div className="item__card-price">{price} ₽</div>
                    <div className="item__card-add"><Button label="В корзину"
                                                            onClick={(event) => onAddItemClick(event, item)}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ContentItemCard